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

/* modal dankort*/
// få fat i modal-elementet i html
const modal = document.getElementById("myModal");

// Finder knappen der åbner modal
const btn = document.getElementById("myBtn");

// Finder første element med class="close" i hele dokumentet
const close = document.querySelector(".close");

// Når brugeren klikker på "Få et Dankort" knappen
btn.addEventListener("click", () => {
  modal.classList.add("open");
});

// Når brugeren klikker på X (luk-knappen)
close.addEventListener("click", () => {
  modal.classList.remove("open");
});
// Når brugeren klikker på selve modal baggrunden (overlay)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    // Lukker modal ved at fjerne "open"
    modal.classList.remove("open");
  }
});

/* Faq */
var buttons = document.getElementsByClassName("plus-btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var accordion = this.parentElement;
    var panel = accordion.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

      // skfiter til plus
      this.textContent = "+";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";

      // skifter til minus
      this.textContent = "−";
    }
  });
}
