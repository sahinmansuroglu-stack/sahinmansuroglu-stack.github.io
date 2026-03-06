function toggleCozum(id) {
    const cozum = document.getElementById('cozum-' + id);
    const btn = cozum.previousElementSibling;
    
    if (cozum.style.display === 'none' || cozum.style.display === '') {
        cozum.style.display = 'block';
        btn.textContent = 'Çözümü Gizle';
    } else {
        cozum.style.display = 'none';
        btn.textContent = 'Çözümü Göster';
    }
}
