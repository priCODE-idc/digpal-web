const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let currentIndex = 0;

function nextCard() {
  const cards = document.querySelectorAll(".card");
  const totalCards = cards.length;

  currentIndex = (currentIndex + 1) % totalCards;
  const carousel = document.querySelector(".carousel");
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

//changing text on profile

let text = [
  "WEB DEVELOPER...",
  "UX/UI DESIGNER...",
  "PROBLEM SOLVING...",
  "FRONT END DEVELOPER...",
];

let index = 0;
const textDiv = document.querySelector(".changing-text");

function changeText() {
  textDiv.style.opacity = 0;
  setTimeout(() => {
    textDiv.textContent = text[index];
    textDiv.style.opacity = 1;
    index = (index + 1) % text.length;
  }, 500);
}
changeText();
setInterval(changeText, 2000);
