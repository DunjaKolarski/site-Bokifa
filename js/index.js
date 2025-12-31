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
function getVisible() {
    if (window.innerWidth < 768) {
        return 2;      
    } else if (window.innerWidth < 1025) {
        return 4;    
    } else {
        return 8;     
    }
}

function moveSlider() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 24; 
    track.style.transform = "translateX(-" + index * (cardWidth + gap) + "px)";
}

right.onclick = function () {
    index++;
    if (index > cards.length - getVisible()) {
        index = 0;
    }
    moveSlider();
};

left.onclick = function () {
    index--;
    if (index < 0) {
        index = cards.length - getVisible();
    }
    moveSlider();
};

window.onresize = function () {
    index = 0;
    moveSlider();
};

moveSlider();




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