const promoTexts = document.querySelectorAll(".promo-text");
const prevPromo = document.getElementById("promo-prev");
const nextPromo = document.getElementById("promo-next");

let promoIndex = 0;

function showPromo(index) {
  promoTexts.forEach((text, i) => {
    text.classList.toggle("active", i === index);
  });
}

nextPromo.onclick = () => {
  promoIndex++;
  if (promoIndex >= promoTexts.length) {
    promoIndex = 0; 
  }
  showPromo(promoIndex);
};

prevPromo.onclick = () => {
  promoIndex--;
  if (promoIndex < 0) {
    promoIndex = promoTexts.length - 1; 
  }
  showPromo(promoIndex);
};

showPromo(promoIndex);


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


const slider = document.getElementById("client-r-line");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - startX); 
  slider.scrollLeft = scrollLeft - walk;
});