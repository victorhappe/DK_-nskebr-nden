# Teknisk dokumentation - Ønskebrønden (Anden semester eksamen - Gruppe 10)

# Om projektet

Dette projekt er lavet som en del af anden semester eksamen på Multimediedesignuddannelsen. Vi har udviklet et dynamisk website med HTML, CSS og JavaScript samt integration af et API.
Websitet fungerer som et “long scroll” onepage-site med tre tilknyttede undersider. Formålet med løsningen er at formidle konceptet omkring Dankort Ønskebrønden og skabe opmærksomhed omkring donationer til Den Danske Naturfond.

På websitet har brugeren mulighed for at:

- Blive introduceret til konceptet på forsiden.
- Læse mere om fordelene ved Dankort på siden “Til dig”.
- Udforske naturområder og aktiviteter på siden “Til naturen”.
- Interagere med hotspots på et Danmarkskort.
- Se dynamisk indhold gennem sliders, modaler og interaktive elementer.

Projektet er udviklet uden brug af frameworks for at holde løsningen simpel, overskuelig og performant.

## Links

GitHub repository
GitHub Pages
Figma
Trello

## Projektstruktur

Projektet er opdelt i HTML-, CSS- og JavaScript-filer.

Ønskebrønden/├── index.html├── til-dig.html├── til-naturen.html├── om-dk.html├── css/│ ├── global.css│ ├── index.css│ ├── omdk.css│ ├── singleview.css│ ├── style.css│ ├── til-dig.css│ └── til-naturen.css├── js/│ ├── donation.js│ ├── main.js│ ├── map.js│ └── tildig.js├── img/└── readme.md

## Filbeskrivelser

index.html – Forside med introduktion til konceptet.
til-dig.html – Side med information om Dankort, fordele og reklamevideo.
til-naturen.html – Side med aktiviteter, donationsoversigt og interaktivt kort.
om-dk.html – Side med information om konceptet og Dankort Øremærket.
global.css – Styrer globale elementer som header, footer, farver og knapper.
JavaScript-filer – Styrer det dynamiske og interaktive indhold på siderne.

## Teknologier

Projektet er udviklet med:

- HTML
- CSS
- JavaScript
- JSON/API-data
- Git & GitHub

Vi har valgt at hardcode størstedelen af websitet for at have fuld kontrol over layout, performance og struktur, mens API’et bruges til dynamisk indhold omkring naturområderne.

## Responsivitet

Websitet er udviklet med mobile-first tilgang og tilpasset både mobil og desktop ved hjælp af media queries.

## Hvordan koden fungerer

Vi har opdelt JavaScript-funktionaliteten, så hver side og funktion har sin egen JavaScript-fil.

# main.js

Bruges globalt på alle sider og styrer blandt andet:

- Burger-menu
- Sliderfunktioner
- Modal/pop-up funktionalitet

# donation.js

Koden bruges til at beregne donationens størrelse og omregne donationen til:

- Antal m² natur
- Antal fodboldbaner
- Antal telte
- Tallene vises dynamisk på hjemmesiden.

# map.js

Koden bruges til at skabe interaktive hotspots på et Danmarkskort.
Når brugeren holder musen over eller klikker på et naturområde:

- Ændres hotspot-farven
- Information opdateres dynamisk
- Billeder og fakta vises
- Aktiviteter knyttet til naturområdet vises
- Funktionen gør kortet interaktivt og giver brugeren mulighed for at udforske forskellige naturområder direkte på hjemmesiden.

# tildig.js

Koden bruges til at skabe:

- En interaktiv slider
- Modal/pop-up funktionalitet
- Slideren gør det muligt at navigere mellem forskellige kort og elementer ved hjælp af pileknapper og animationer.
- Modalen bruges til at vise ekstra information og kan lukkes enten via kryds eller ved klik udenfor modalvinduet.

# API og JSON-struktur

Websitet benytter et API til dynamisk indhold omkring naturområderne.

- API’et bruges til at hente:
- Information om naturområder
- Fakta og beskrivelser
- Billeder
- Aktiviteter

Dataene hentes i JSON-format og indsættes dynamisk på hjemmesiden gennem JavaScript.

# Eksempel på endpoints

(API endpoint indsættes her)
Navngivning

Vi har forsøgt at navngive filer, variabler og funktioner så tydeligt og beskrivende som muligt.

# Eksempler på variabler

const burger = document.querySelector(".burger");const modal = document.getElementById("disclaimer-modal");
--primary-color: #24352d;
Eksempler på funktioner
burger.addEventListener("click", burgerClick);function mouseOutLejodde() { lejodde.style.fill = "var(--accent-color1)";}

## Scripts

Vi placerer JavaScript-filer i <head> med defer attribut for at sikre, at HTML’en loader før JavaScript afvikles.
Git branches

# Vi navngiver branches efter den funktion eller side der arbejdes på.

Eksempel:
feature-burger-menufeature-hotspotsfeature-slider

## Kommentarer i koden

Vi har kommenteret vores kode for at skabe bedre overblik og gøre det lettere at samarbejde i gruppen.
Eksempel:

/**\*\***\*\*\***\*\*** FOOTER ****\*\*****\*****\*\*****/

# Arbejdsfordeling

-Victor
index.html
global.css
index.css
donation.js
Header/burger-menu
-Signe
til-dig.html
til-dig.css
om-dk.html
om-dk.css
Popover/disclaimer
-Yasmin
API
singleview.html
style.css
-Eline
til-naturen.html
til-naturen.css
Footer
map.js

# Workflow

Vores workflow har været:

- Oprette en branch
- Udvikle en feature
- Committe ændringer
- Pushe til GitHub
- Merge til main når funktionen virkede
- Dette gjorde det lettere at holde styr på arbejdsfordelingen og undgå konflikter i projektet.

# Funktionalitet

Websitet indeholder blandt andet følgende funktioner:

- Dynamisk visning af information om naturområder
- Hover- og klikfunktioner på hotspots
- Dynamisk opdatering af tekst og billeder
- Interaktive sliders
- Modal/pop-up vinduer
- Navigation mellem sider og sektioner
- Responsivt design til mobil og desktop

## Bæredygtighed

Vi har forsøgt at udvikle løsningen med fokus på performance og bæredygtighed.
Tiltag

- Bruge lette filformater som WebP og SVG
- Undgå tunge frameworks
- Genbruge kode gennem global.css
- Optimere billeder via Squoosh
- Undgå autoplay-videoer
- Holde løsningen simpel og letvægtig

Et lettere website kræver færre ressourcer at loade og bruge.

# Udfordringer undervejs

Under udviklingen oplevede vi enkelte udfordringer i forbindelse med:

- Merge conflicts i GitHub
- Responsivitet mellem mobil og desktop
- Koordinering af kode mellem branches
- Disse udfordringer blev løst gennem løbende kommunikation og strukturering af workflow.

# Mulige forbedringer

Hvis projektet skulle videreudvikles, kunne vi blandt andet arbejde videre med:

- Mere avanceret API-integration
- Flere dynamiske aktiviteter
- Bedre animationer og transitions
- Mere ensartet responsivitet på tværs af sider
- Optimering af kode og komponentstruktur

# Gruppemedlemmer

- Signe Nøhr Bækmand
- Yasmin Gullev
- Eline Mirabal
- Victor Happe
