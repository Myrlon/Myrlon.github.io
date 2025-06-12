// Ajoute un effet au survol de chaque élément <p>
document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('span').forEach(function(p) {
    p.addEventListener('mouseenter', function() {
        p.style.transition = 'all 0.3s cubic-bezier(0.4,0,0.2,1)';
        p.style.color = '#fff';
        p.style.backgroundColor = '#0078d7';
        p.style.fontSize = '1.5em';
        p.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        p.style.transform = 'scale(1.08) rotate(-2deg)';
    });
    p.addEventListener('mouseleave', function() {
        p.style.color = '';
        p.style.backgroundColor = '';
        p.style.fontSize = '';
        p.style.boxShadow = '';
        p.style.transform = '';
    });
});



});