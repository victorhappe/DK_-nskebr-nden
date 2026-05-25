const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);

function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

/* modal disclaimer */
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("disclaimer-modal");
  const btn = document.getElementById("accept-btn");

  // Tjek om brugeren allerede har accepteret
  if (!localStorage.getItem("disclaimerAccepted")) {
    modal.style.display = "flex";
  }

  // Når brugeren accepterer
  btn.addEventListener("click", function () {
    localStorage.setItem("disclaimerAccepted", "true");
    modal.style.display = "none";
  });
});
