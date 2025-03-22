let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) { 
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slider by showing the first slide
showSlide(currentSlide);

// Auto-slide functionality (optional)
setInterval(() => {
    changeSlide(1);  // Automatically move to the next slide every 3 seconds
}, 6000);