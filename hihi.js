const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Show the first image when the page loads
showSlide(currentIndex);
