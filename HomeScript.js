window.addEventListener('scroll', function() {
    const background = document.querySelector('.top-background');
    let scrollPosition = window.scrollY;
    let zoomValue = 100 + (scrollPosition / 35); // Zoom factor based on scroll position
    background.style.backgroundSize = zoomValue + '%';
});