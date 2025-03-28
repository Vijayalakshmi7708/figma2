

const imageArray = [
    "assets/img/made.PNG", "assets/img/made.PNG", "assets/img/made.PNG", "assets/img/made.PNG", "assets/img/made.PNG",
    "assets/img/made.PNG", "assets/img/made.PNG", "assets/img/made.PNG", "assets/img/made.PNG", "assets/img/made.PNG",
    "assets/img/made.PNG", "assets/img/candles4.jpg", "assets/img/download (4).jpg", "assets/img/download (2).jpg",
    "assets/img/made.PNG", "assets/img/candles4.jpg", "assets/img/download (4).jpg", "assets/img/download (2).jpg", "assets/img/candles4.jpg"
];

const carousel = document.querySelector(".carousel");


let images = [...imageArray, imageArray[0]];

// Add images dynamically
images.forEach(imgSrc => {
    let img = document.createElement("img");
    img.src = imgSrc;
    carousel.appendChild(img);
});

let index = 0;

function nextSlide() {
    index++;
    carousel.style.transform = `translateX(${-index * 100}%)`;

    
    if (index === imageArray.length) {
        setTimeout(() => {
            carousel.style.transition = "none";
            index = 0;
            carousel.style.transform = "translateX(0)";
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s linear";
            });
        }, 500);
    }
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
