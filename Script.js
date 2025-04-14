const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

// Function to show the current slide and apply the zoom effect
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";  // Show current slide and hide the others
    });

    // Apply the zoom effect to the current slide
    const currentSlide = slides[index];
    currentSlide.classList.add('zoom'); // Add zoom class for animation

    // Remove the zoom class after the animation is complete (500ms duration)
    setTimeout(() => {
        currentSlide.classList.remove('zoom');
    }, 500); // 500ms matches the duration of the zoom animation
}

// Event listener for the "prev" button
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;  // Go to the last slide if at the first
    showSlide(currentIndex);  // Show the previous slide with zoom effect
});

// Event listener for the "next" button
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;  // Loop back to first slide if at the end
    showSlide(currentIndex);  // Show the next slide with zoom effect
});

// Show the first image when the page loads
showSlide(currentIndex);





//theme

function changeTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    changeImage(theme);
}

function changeImage(theme) {
    // You can also switch the image in an <img> tag if you prefer
    var themeImage = document.getElementById("themeImage");
    
    switch (theme) {
        case 'dark':
            themeImage.src = 'dark.png';
            break;
        case 'theme2':
            themeImage.src = 'light.png';
            break;
        case 'theme3':
            themeImage.src = 'light.png';
            break;
        case 'theme4':
            themeImage.src = 'light.png';
            break;
        case 'theme5':
            themeImage.src = 'light.png';
            break;
        default:
            themeImage.src = 'light.png'; // Default image
    }
}
