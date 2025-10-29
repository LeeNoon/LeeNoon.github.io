// Search Functionality
(function() {
  const searchToggle = document.querySelector('.search-toggle');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchClose = document.querySelector('.search-close');
  
  let searchIndex = [];
  let fuse = null;
  
  // Load search index
  async function loadSearchIndex() {
    try {
      const response = await fetch('/index.json');
      if (response.ok) {
        searchIndex = await response.json();
        initializeFuse();
      }
    } catch (error) {
      console.error('Failed to load search index:', error);
    }
  }
  
  // Initialize Fuse.js for fuzzy search
  function initializeFuse() {
    // Simple search implementation without external library
    // This can be replaced with Fuse.js if needed
  }
  
  // Open search overlay
  if (searchToggle) {
    searchToggle.addEventListener('click', () => {
      if (searchOverlay) {
        searchOverlay.classList.add('active');
        searchInput.focus();
        if (searchIndex.length === 0) {
          loadSearchIndex();
        }
      }
    });
  }
  
  // Close search overlay
  if (searchClose) {
    searchClose.addEventListener('click', () => {
      if (searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
      }
    });
  }
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
      searchInput.value = '';
      searchResults.innerHTML = '';
    }
  });
  
  // Close when clicking outside
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
      }
    });
  }
  
  // Search function
  function performSearch(query) {
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }
    
    query = query.toLowerCase();
    const results = searchIndex.filter(item => {
      return item.title.toLowerCase().includes(query) ||
             (item.content && item.content.toLowerCase().includes(query)) ||
             (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query))) ||
             (item.categories && item.categories.some(cat => cat.toLowerCase().includes(query)));
    });
    
    displayResults(results, query);
  }
  
  // Display search results
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-secondary);">未找到相关文章</div>';
      return;
    }
    
    const html = results.slice(0, 10).map(item => {
      const excerpt = item.content ? getExcerpt(item.content, query) : item.summary || '';
      return `
        <a href="${item.permalink}" class="search-result-item" style="display: block; padding: 1rem; margin-bottom: 0.5rem; background: var(--bg-secondary); border-radius: 0.5rem; text-decoration: none; transition: all 0.2s;">
          <h4 style="margin: 0 0 0.5rem 0; color: var(--text-primary);">${highlightText(item.title, query)}</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary); overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${highlightText(excerpt, query)}</p>
          ${item.tags ? `<div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-tertiary);">标签: ${item.tags.join(', ')}</div>` : ''}
        </a>
      `;
    }).join('');
    
    searchResults.innerHTML = html;
    
    // Add hover effect
    document.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.background = 'var(--bg-tertiary)';
        this.style.transform = 'translateX(4px)';
      });
      item.addEventListener('mouseleave', function() {
        this.style.background = 'var(--bg-secondary)';
        this.style.transform = 'translateX(0)';
      });
    });
  }
  
  // Get excerpt around search query
  function getExcerpt(content, query) {
    const index = content.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) {
      return content.substring(0, 150) + '...';
    }
    
    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + query.length + 100);
    let excerpt = content.substring(start, end);
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < content.length) excerpt = excerpt + '...';
    
    return excerpt;
  }
  
  // Highlight matching text
  function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark style="background: var(--accent-primary); color: white; padding: 0.1rem 0.2rem; border-radius: 0.2rem;">$1</mark>');
  }
  
  // Search input event listener
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        performSearch(e.target.value);
      }, 300);
    });
    
    // Search on enter
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch(e.target.value);
      }
    });
  }
})();
