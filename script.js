document.addEventListener('DOMContentLoaded', function() {
    // 1. سلايدر Welcome
    const dots = document.querySelectorAll('.swiper span');
    const slides = document.querySelectorAll('.description');
    let currentSlide = 0;
    let slideInterval;

    function changeSlide(index) {
        // إخفاء كل السلايدات
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // إظهار السلايد المطلوب
        slides[index].classList.add('active');
        
        // تحديث النقاط
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
        
        currentSlide = index;
    }

    function startSlider() {
        slideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            changeSlide(nextSlide);
        }, 3000);
    }

    // النقر على النقاط
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(slideInterval);
            changeSlide(index);
            startSlider();
        });
    });

    // بدء السلايدر
    if(slides.length > 0) {
        changeSlide(0);
        startSlider();
    }

    // 2. وظيفة البحث
    const searchIcon = document.querySelector('.fa-search');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');
    const searchInput = document.querySelector('.search-box input');
    
    if(searchIcon && searchOverlay) {
        searchIcon.addEventListener('click', function() {
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput.focus(), 100);
        });
        
        closeSearch.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
        });
        
        document.addEventListener('keyup', function(e) {
            if (e.key === "Escape") {
                searchOverlay.classList.remove('active');
            }
        });
    }

    function initHorizontalSlider(selector, speed = 2000) {
        const container = $(selector);
        const items = container.children();
        let current = 0;
        
        setInterval(() => {
            current = (current + 1) % items.length;
            container.css('transform', `translateX(-${current * 20}%)`);
        }, speed);
    }

    initHorizontalSlider('.trendy-section .cards-container .card');
    initHorizontalSlider('.top-picks-section .cards-container .card');
    initHorizontalSlider('.education-section .cards-container .card');
    initHorizontalSlider('.entertainment-section .cards-container .card');
    initHorizontalSlider('.business-section .cards-container .card');
    initHorizontalSlider('.audiobooks-section .cards-container .row1 .card');
    initHorizontalSlider('.audiobooks-section .cards-container .row2 .card');
});