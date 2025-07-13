// darkmode.js
document.addEventListener("DOMContentLoaded", function () {
	const toggleButton = document.getElementById('dark-mode-toggle');
	
	// Check for saved dark mode preference
	if (localStorage.getItem('darkMode') === 'enabled') {
	  document.body.classList.add('dark-mode');
	  toggleButton.textContent = '☀️';
	}
	
	toggleButton.addEventListener('click', function () {
	  document.body.classList.toggle('dark-mode');
	  const isDark = document.body.classList.contains('dark-mode');
	  toggleButton.textContent = isDark ? '☀️' : '🌙';
	  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
	});
  });
  