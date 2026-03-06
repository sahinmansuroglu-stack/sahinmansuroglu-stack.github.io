// Çözüm göster/gizle fonksiyonu
function toggleCozum(id) {
    const cozumDiv = document.getElementById('cozum-' + id);
    const button = event.target;

    if (cozumDiv.style.display === 'none' || cozumDiv.style.display === '') {
        cozumDiv.style.display = 'block';
        button.textContent = 'Çözümü Gizle';
        button.style.background = 'linear-gradient(135deg, #dc2626, #b91c1c)';
    } else {
        cozumDiv.style.display = 'none';
        button.textContent = 'Çözümü Göster';
        button.style.background = 'linear-gradient(135deg, #0078d4, #005a9e)';
    }
}

// Aktif sayfa için navigasyon vurgulama
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
