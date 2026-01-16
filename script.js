document.addEventListener('DOMContentLoaded', () => {
    
    // 1. منطق شاشة التحميل (Preloader Logic)
    const preloader = document.getElementById('preloader');
    
    // ننتظر 3.5 ثانية (مدة الرسمة) ثم نخفي الشاشة
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); // وقت للانتقال السلس
    }, 3000);

    // 2. تحديث السنة تلقائياً في الفوتر
    document.getElementById('year').textContent = new Date().getFullYear();

    // 3. تأثير الميلان ثلاثي الأبعاد (3D Tilt Effect) للبطاقات
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // حساب نسبة الميلان
            const xPct = (x / rect.width) - 0.5;
            const yPct = (y / rect.height) - 0.5;
            
            // تطبيق التحويل (Rotation)
            card.style.transform = `
                perspective(1000px)
                rotateX(${yPct * -10}deg)
                rotateY(${xPct * 10}deg)
                scale(1.02)
            `;
        });

        // إعادة البطاقة لوضعها الطبيعي عند خروج الماوس
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // 4. منطق النوافذ المنبثقة (Modals)
    window.openModal = function(modalId) {
        const modal = document.getElementById('modal-' + modalId);
        if(modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
        }
    }

    window.closeModal = function() {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.remove('open');
        });
        document.body.style.overflow = 'auto'; // إعادة التمرير
    }

    // إغلاق النافذة عند الضغط خارج المربع
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    });

});
