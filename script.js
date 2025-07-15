const btn = document.getElementById('toggle-theme');
    const icon = btn.querySelector('i');
    function setTheme(light) {
      document.body.classList.toggle('light-mode', light);
      icon.className = light ? 'fas fa-sun' : 'fas fa-moon';
    }
    btn.onclick = () => {
      const light = !document.body.classList.contains('light-mode');
      setTheme(light);
      localStorage.setItem('theme', light ? 'light' : 'dark');
    };
    // Carregar preferência
    if (localStorage.getItem('theme') === 'light') setTheme(true);