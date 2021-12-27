const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearactiveClasses();
        slide.classList.add('active');
    });

    function clearactiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}