
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
}

const track = document.querySelector(".authors-track");
const cards = document.querySelectorAll(".line-author");
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");

let index = 0;
const visible = 8;

function update() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 24;
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
}

nextBtn.onclick = () => {
    index++;
    if (index > cards.length - visible) index = 0;
    update();
};

prevBtn.onclick = () => {
    index--;
    if (index < 0) index = cards.length - visible;
    update();
};

update();