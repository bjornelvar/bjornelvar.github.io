// scripts/page-counter.js

window.addEventListener('load', function () {
    fetch('https://page-counter-axum.fly.dev/api/counter', {
        method: 'POST'
    })
        .then(response => response.text())
        .then(data => console.log('Counter updated:', data))
        .catch(error => console.error('Error updating counter:', error));
});
