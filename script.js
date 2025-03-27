const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideIndicator = document.getElementById('slide-indicator');
let currentSlide = 0;

showSlide(currentSlide);

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
});

function showSlide(n) {
    slides.forEach(slide => {
        slide.classList.add('hidden');
    });
    
    slides[n].classList.remove('hidden');
    
    currentSlide = n;
    
    slideIndicator.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;
    
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    }
});