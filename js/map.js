const enge = document.querySelector("#gjellerupEnge");

enge.addEventListener("mouseover", mouseOverGjellerup);
enge.addEventListener("mouseout", mouseOutGjellerup);
enge.addEventListener("click", clickGjellerup);

function mouseOverGjellerup() {
  console.log("mouseOverGjellerup");
  enge.style.fill = "var(--secondary-color2)";
}

function mouseOutGjellerup() {
  console.log("mouseOutGjellerup");
  enge.style.fill = "var(--accent-color1)";
}

/********************hotspot gjellerup enge ***********************/
function clickGjellerup() {
  console.log("clickGjellerup");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".kortoversigt > h2").textContent = "Gjellerup enge";
  document.querySelector(".placeholder").textContent = "Sammenhængende natur med græssende dyr, enge med kær, overdrev, skov og krat ved Herning.";
  document.querySelector("#requirement").innerHTML = `<H2>FAKTA</H2> <H2>Aktiviteter</H2>`;

  document.querySelector("#efficiency").innerHTML = `
   <img src="img/gjellerupenge.webp" alt="gjellerupenge" />
   <p>Oplev Gjellerup Enge!

Nyd naturen fra cykelsaddel eller til fods ad tre kilometer nye vandrestier. Oplev sanglærke og vibe flyve over nye fugtige enge, hvor vilde planter spreder farver og giver nektar til summende bier og sommerfugle.

Hernings borgere og alle andre kan glæde sig over 144 hektar sammenhængende natur med græssende dyr, enge med kær, overdrev, skov og krat.
</p>
   `;
}

function cleanup() {
  console.log("cleanup");
  document.querySelector("#requirement").removeEventListener("animationend", cleanup);

  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}

/***************hotspot hammer *********************/
const hammer = document.querySelector("#hammerBakker");

hammer.addEventListener("mouseover", mouseOverHammer);
hammer.addEventListener("mouseout", mouseOutHammer);
hammer.addEventListener("click", clickHammer);

function clickHammer() {
  console.log("clickHammer");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".kortoversigt > h2").textContent = "Hammer Bakker";
  document.querySelector(".placeholder").textContent = "I det smukke og vigtige naturområde ved Limfjorden i Nordjylland. ";
  document.querySelector("#requirement").innerHTML = `<h2>FAKTA</h2><h2>Aktiviteter</h2>`;
  document.querySelector("#efficiency").innerHTML = ` <img src="img/vandreturhammer.webp" alt="vandreturhammer"/>
   <p> Her kan du nyde livet i naturen på hele fire vandreruter med tilsammen cirka 17 kilometers smuk vandring. 

Du kan trave op og ned ad bakker, gennem dal og slugt, opleve den smukke Pebermose, se overdrev, gammel rølleskov, bøgeskov og området, hvor heste græsser i naturen. 

Man kan gå ruterne enkeltvis eller på tværs, da ruterne danner et forgrenet net. 

Man kan starte turen fra de tre p-pladser.
`;
}

function mouseOverHammer() {
  console.log("mouseOverHammer");
  hammer.style.fill = "var(--secondary-color2)";
}

function mouseOutHammer() {
  console.log("mouseOutHammer");
  hammer.style.fill = "var(--accent-color1)";
}

/***************hotspot hammer *********************/
