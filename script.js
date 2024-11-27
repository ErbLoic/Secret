let currentIndex = 0;
let cycleCount = 0;
const images = document.querySelectorAll('#carrousel .image-container');
const totalImages = images.length;

function updateCarrousel() {
    const carrousel = document.getElementById('carrousel');
    const translateX = -currentIndex * 33.33;
    carrousel.style.transform = `translateX(${translateX}%)`;
}

function goToNextImage() {
    currentIndex++;
    cycleCount++;

    if (currentIndex === totalImages/3) {
        currentIndex = 0;
    }

    if (cycleCount >= totalImages/3) {
        cycleCount = 0;
        currentIndex = 0;
    }

    updateCarrousel();
}

let intervalId = setInterval(goToNextImage, 3000);

images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        const carrousel = document.getElementById('carrousel');
        carrousel.style.animationPlayState = 'paused';
    });

    image.addEventListener('mouseleave', () => {
        const carrousel = document.getElementById('carrousel');
        carrousel.style.animationPlayState = 'running';
    });
});

function startCarrousel() {
    const carrousel = document.getElementById('carrousel');
    carrousel.style.transition = 'transform 1s ease-in-out';
    updateCarrousel();
}

startCarrousel();
