const themes = ['light', 'dark', 'pink'];
    let currentTheme = 0;

    function toggleTheme() {
      document.body.className = '';
      currentTheme = (currentTheme + 1) % themes.length;
      if (themes[currentTheme] !== 'light') {
        document.body.classList.add(themes[currentTheme]);
      }
    }

    document.querySelector('.search-box').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchGoogle();
      }
    });

    document.querySelectorAll('.search-button')[0].addEventListener('click', searchGoogle);
    document.querySelectorAll('.search-button')[1].addEventListener('click', luckySearch);

    function searchGoogle() {
      const query = document.querySelector('.search-box').value.trim();
      if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      }
    }

    function luckySearch() {
      const query = document.querySelector('.search-box').value.trim();
      if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I%27m+Feeling+Lucky`, '_blank');
      } else {
        window.open('https://www.google.com/doodles', '_blank');
      }
    }
