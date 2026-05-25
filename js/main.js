const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);

function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

/* Slider */

const track = document.querySelector(".fordele-grid");

const nextBtn = document.querySelector(".slider-arrow-right");
const prevBtn = document.querySelector(".slider-arrow-left");

function getStep() {
  const card = track.firstElementChild;
  const gap = 32;

  return card.offsetWidth + gap;
}

function moveNext() {
  const firstCard = track.firstElementChild;

  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(-${getStep()}px)`;

  track.addEventListener("transitionend", function handler() {
    track.appendChild(firstCard);

    track.style.transition = "none";
    track.style.transform = "translateX(0)";

    track.removeEventListener("transitionend", handler);
  });
}

function movePrev() {
  const lastCard = track.lastElementChild;

  track.insertBefore(lastCard, track.firstElementChild);

  track.style.transition = "none";
  track.style.transform = `translateX(-${getStep()}px)`;

  requestAnimationFrame(() => {
    track.style.transition = "transform 0.4s ease";
    track.style.transform = "translateX(0)";
  });
}

nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);

/* Modal */

// få fat i modal
var modal = document.getElementById("myModal");

// få fat i knappen der åbner modal
var btn = document.getElementById("myBtn");

// få fat i <span> elementet der lukker modal
var span = document.getElementsByClassName("close")[0];

// klikker på knappen, åbner modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Når brugeren klikker på <span> (x), lukker modal
span.onclick = function () {
  modal.style.display = "none";
};

// Når brugeren klikker hvor som helst uden for modal, lukker den
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
