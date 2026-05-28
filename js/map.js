console.log("enge:", enge);
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
  document.querySelector("#requirement").innerHTML = `<H2>Fakta</H2> <p>
Areal:
144 hektar</p>

<p>Økonomi:
Budget cirka 11,5 mio</p>

<p>Partnere:
Ege Carpets, Herning Kommune, René Hougaard ARDE</p>
  
  <H2>Aktiviteter</H2>
  <p>Vi anbefaler klart det her område til at tage på picnic i de smukke enge, samt vilde natur med et rigt liv af vilde planter, samt sommerfugle og diverst insektliv.</p><a href="#aktiviteter" class="naturencards-btn">Læs mere</a>`;

  document.querySelector("#efficiency").innerHTML = `
   <img class="hotspot-img" src="img/gjellerupenge1.webp" alt="gjellerupenge" />
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
  document.querySelector("#requirement").innerHTML = `<h2>Fakta</h2> <p>Areal:
720 ha</p>

<p>Økonomi:
80 mio. kr.</p>

<p>Partnere:
A. P. Møller Fonden, Aalborg Kommune, Miljø-­ og Ligestillings-­ ministeriet og Dansk Botanisk Forening</p>

<h2>Aktiviteter</h2>
<p> Vi anbefaler klart det her område til gode lange vandreture, i de smukke omgivelser.</p> <a href="#aktiviteter" class="naturencards-btn">Læs mere</a>`;
  document.querySelector("#efficiency").innerHTML = `<img class="hotspot-img" src="img/hammerbillede.webp" alt="vandreturhammer"/>
   <p> Her kan du opleve naturen på fire forskellige vandreruter med i alt cirka 17 kilometer naturskønne stier. Undervejs bevæger du dig gennem bakker, dale og slugter, forbi den smukke Pebermose samt områder med overdrev, gammel troldeskov og bøgeskov. Du kan også opleve heste græsse frit i landskabet. Ruterne hænger sammen i et forgrenet stinet, så du kan gå dem hver for sig eller kombinere dem på kryds og tværs. Turen kan startes fra områdets tre parkeringspladser.</p>`;
}

function mouseOverHammer() {
  console.log("mouseOverHammer");
  hammer.style.fill = "var(--secondary-color2)";
}

function mouseOutHammer() {
  console.log("mouseOutHammer");
  hammer.style.fill = "var(--accent-color1)";
}

/***************hotspot randklove skaar *********************/

const randKloveSkaar = document.querySelector("#randKloveSkaar");

randKloveSkaar.addEventListener("mouseover", mouseOverRandKloveSkaar);
randKloveSkaar.addEventListener("mouseout", mouseOutRandKloveSkaar);
randKloveSkaar.addEventListener("click", clickRandKloveSkaar);

function clickRandKloveSkaar() {
  console.log("clickRandKloveSkaar");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".kortoversigt > h2").textContent = "Randkløve Skår";
  document.querySelector(".placeholder").textContent = "Sjælden kystnatur, kystskov og klippesøer lige ud til Østersøen.";
  document.querySelector("#requirement").innerHTML = `<h2>Fakta</h2>
  <p> Areal:
50 ha</p>

<p>Økonomi:
8 mio. kr.</p>

<p>Partnere:
Bornholms Regionskommune, Dankort</p>
  
  <h2>Aktiviteter</h2>
  <p>Vi anbefaler klart det her område til at tage på opdagelse i den smukke bornholmske særprægede natur, med de stejle klippeformationer gør det området perfekt til vandreture og naturfotografi.</p><a href="#aktiviteter" class="naturencards-btn">Læs mere</a>`;
  document.querySelector("#efficiency").innerHTML = `<img class="hotspot-img"src="img/randklove2.webp" alt="vandreturhammer"/>
   <p> Besøg et af Bornholms smukke naturområder og oplev et landskab fyldt med unikke naturoplevelser. Her skabes der flere og bedre levesteder for truede og sjældne dyr og planter, samtidig med at området bliver mere tilgængeligt for besøgende.
Læs mere om Naturfondens første naturområde på Bornholm, som beskyttes og udvikles i samarbejde med Bornholms Regionskommune.</p>`;
}

function mouseOverRandKloveSkaar() {
  console.log("mouseOverRandKloveSkaar");
  randKloveSkaar.style.fill = "var(--secondary-color2)";
}

function mouseOutRandKloveSkaar() {
  console.log("mouseOutRandKloveSkaar");
  randKloveSkaar.style.fill = "var(--accent-color1)";
}

/***************hotspot lejodde *********************/
const lejodde = document.querySelector("#lejOdde");

lejodde.addEventListener("mouseover", mouseOverLejodde);
lejodde.addEventListener("mouseout", mouseOutLejodde);
lejodde.addEventListener("click", clickLejodde);

function clickLejodde() {
  console.log("clickLejodde");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".kortoversigt > h2").textContent = "Lejodde Storebælt Klint";
  document.querySelector(".placeholder").textContent = "Området består af fem kilometer kyst, et 50 ha. stort fuglereservat og den flotte klint ved Storebæltsbroen.";
  document.querySelector("#requirement").innerHTML = `<h2>Fakta</h2>
  <p>
  Areal:
270 hektar</p>

<p>Økonomi:
57 mio. kr.</p>

<p>Partnere:
Slagelse Kommune, 15. Juni Fonden, Dankort</p>
  
  <h2>Aktiviteter</h2>
  <p>Vi anbefaler klart det her område til dem der er interesserede i det spændende fugleliv, tag ud til reservaterne, samt gå på opdagelse ved klinten samt strandengene og bløde bakker lige ud til havet</p><a href="#aktiviteter" class="naturencards-btn">Læs mere</a>`;
  document.querySelector("#efficiency").innerHTML = `<img class="hotspot-img"src="img/lejodde4.webp" alt="vandreturhammer"/>
   <p> Oplev den imponerende klint ved Storebæltsbroen helt tæt på.
Naturfondens nyeste naturområde strækker sig over 270 hektar og byder på storslåede udsigter over Storebælt, fem kilometer kystlinje med strandenge samt bløde bakker ned mod havet. Når naturen genoprettes, vil området blomstre med farverige overdrev og et rigt dyre- og planteliv.
Naturområdet udvikles i samarbejde med Slagelse Kommune og 15. Juni Fonden og er let tilgængeligt fra både motorvejen mellem Jylland og Sjælland, Korsør Station og Korsør by.</p>`;
}

function mouseOverLejodde() {
  console.log("mouseOverLejodde");
  lejodde.style.fill = "var(--secondary-color2)";
}

function mouseOutLejodde() {
  console.log("mouseOutLejodde");
  lejodde.style.fill = "var(--accent-color1)";
}
