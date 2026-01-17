document.addEventListener('DOMContentLoaded', () => {
    
    // إخفاء شاشة التحميل بعد 2.5 ثانية
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2500);

    // التعامل مع النوافذ المنبثقة (Modals)
    window.openModal = function(id) {
        document.getElementById('modal-' + id).style.display = 'flex';
    };

    window.closeModal = function() {
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    };

    // إغلاق عند الضغط في الخارج
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    };
});
