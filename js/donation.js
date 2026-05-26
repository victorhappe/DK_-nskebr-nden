/*
  donation.js
  Enkel "for dummies" version der animerer donations-beløbet fra 3.000.000 til 4.000.000
  med 100 opdateringer i sekundet og et trin på 0,01 kr (1 øre) pr. opdatering.
  Filerne i HTML skal have elementer med id'erne:
   - #donationAmount
   - #natureArea
   - #footballFields
   - #tents
*/

// ---------- Indstillinger (let nemt at ændre) ----------
const START_AMOUNT = 3421915.0; // 3.000.000 kr (start)
const END_AMOUNT = 4000000.0; // 4.000.000 kr (slut)
const UPDATES_PER_SECOND = 100; // hvor mange gange pr. sekund vi opdaterer
const INCREMENT = 0.01; // 0,01 kr = 1 øre pr. opdatering

// Konstanter til beregningerne (som i dit oprindelige script)
const PRICE_PER_M2 = 12;
const FOOTBALL_FIELD_M2 = 7140;
const TENT_M2 = 5;

// Beregn hvor ofte vi skal køre (i millisekunder)
const INTERVAL_MS = 1000 / UPDATES_PER_SECOND;

// ---------- Hjælpefunktioner ----------
/**
 * formatCurrency(amount)
 * - Formaterer et tal som dansk valuta (fx "3.047.902,49 KR")
 */
function formatCurrency(amount) {
  return (
    amount.toLocaleString("da-DK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " KR"
  );
}

/**
 * safeQuery(id)
 * - Henter elementet med id eller returnerer null hvis ikke fundet.
 */
function safeQuery(id) {
  return document.querySelector(id);
}

/**
 * updateDOM(amount)
 * - Opdaterer alle relevante DOM-elementer med nye værdier
 */
function updateDOM(amount) {
  const natureArea = amount / PRICE_PER_M2;
  const footballFields = natureArea / FOOTBALL_FIELD_M2;
  const tents = natureArea / TENT_M2;

  const donationEl = safeQuery("#donationAmount");
  const natureEl = safeQuery("#natureArea");
  const footballEl = safeQuery("#footballFields");
  const tentsEl = safeQuery("#tents");

  if (donationEl) donationEl.textContent = formatCurrency(amount);
  if (natureEl) natureEl.textContent = Math.round(natureArea).toLocaleString("da-DK") + " m²";
  if (footballEl) footballEl.textContent = Math.round(footballFields).toLocaleString("da-DK");
  if (tentsEl) tentsEl.textContent = Math.round(tents).toLocaleString("da-DK");
}

// ---------- Animation (starter når scriptet loader) ----------
let currentAmount = START_AMOUNT;

// Vis startværdier med det samme
updateDOM(currentAmount);

// Start interval der opdaterer beløbet
const timer = setInterval(() => {
  // Forøg beløbet med 1 øre, men stop ved END_AMOUNT
  currentAmount = Math.min(currentAmount + INCREMENT, END_AMOUNT);

  // Opdater visningen
  updateDOM(currentAmount);

  // Stop animationen når vi har nået målet
  if (currentAmount >= END_AMOUNT) {
    clearInterval(timer);
  }
}, INTERVAL_MS);
