document.addEventListener('DOMContentLoaded', () => {
    
    // 1. إخفاء التحميل بعد 2.5 ثانية بسلاسة
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 2500);
    }

    // 2. برمجة السلايدر العلوي (Hero Slider)
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const sliderContainer = document.getElementById('mainSlider');
    let currentSlide = 0;
    const slideInterval = 5000; // وقت تقليب السلايدر (5 ثواني)
    let sliderTimer;

    // دالة لتغيير الشريحة
    window.changeSlide = function(index) {
        currentSlide = index;
        updateSlider();
        resetTimer();
    };

    function updateSlider() {
        // تحريك الحاوية بناءً على رقم الشريحة (0, 100%, 200%)
        sliderContainer.style.transform = `translateX(${currentSlide * 100}%)`;
        
        // تحديث حالة النقاط (Dots)
        dots.forEach(dot => dot.classList.remove('active'));
        if(dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function startTimer() {
        sliderTimer = setInterval(nextSlide, slideInterval);
    }

    function resetTimer() {
        clearInterval(sliderTimer);
        startTimer();
    }

    // بدء التقليب التلقائي
    if (slides.length > 0) {
        startTimer();
    }


    // 3. التعامل مع النوافذ المنبثقة (Modals)
    window.openModal = function(id) {
        const modal = document.getElementById('modal-' + id);
        if (modal) {
            modal.style.display = 'flex';
        }
    };

    window.closeModal = function() {
        document.querySelectorAll('.modal').forEach(m => {
            m.style.display = 'none';
        });
    };

    // إغلاق النافذة المنبثقة عند الضغط في الخارج
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    };
});
