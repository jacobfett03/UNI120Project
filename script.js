document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const slideIndicator = document.getElementById('slide-indicator');
    let currentSlide = 0;
    let isTransitioning = false;

    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.classList.add('hidden');
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0 && !isTransitioning) {
            navigateToSlide(currentSlide - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1 && !isTransitioning) {
            navigateToSlide(currentSlide + 1);
        }
    });

    function navigateToSlide(newIndex) {
        if (isTransitioning || newIndex === currentSlide) return;
        
        isTransitioning = true;
        
        slides[currentSlide].classList.add('hidden');
        
        setTimeout(() => {
            slides[newIndex].classList.remove('hidden');
            
            currentSlide = newIndex;
            
            slideIndicator.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;
            
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === slides.length - 1;
            
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }, 400);
    }

    document.addEventListener('keydown', (e) => {
        if (!isTransitioning) {
            if (e.key === 'ArrowRight' || e.key === 'PageDown') {
                if (currentSlide < slides.length - 1) {
                    navigateToSlide(currentSlide + 1);
                }
            } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                if (currentSlide > 0) {
                    navigateToSlide(currentSlide - 1);
                }
            }
        }
    });

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
});