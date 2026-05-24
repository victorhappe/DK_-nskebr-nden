const donationAmount = 3047902.49;

const pricePerM2 = 12;
const footballFieldM2 = 7140;
const tentM2 = 5;

const natureArea = donationAmount / pricePerM2;
const footballFields = natureArea / footballFieldM2;
const tents = natureArea / tentM2;

document.querySelector("#donationAmount").textContent =
  donationAmount.toLocaleString("da-DK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " KR";

document.querySelector("#natureArea").textContent = Math.round(natureArea).toLocaleString("da-DK") + "m²";

document.querySelector("#footballFields").textContent = Math.round(footballFields).toLocaleString("da-DK");

document.querySelector("#tents").textContent = Math.round(tents).toLocaleString("da-DK");
