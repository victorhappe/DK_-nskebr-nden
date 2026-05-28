console.log("fetch.js is connected");

const URL =
  "https://gnnsqekkjgykgsiatjms.supabase.co/rest/v1/activities?select=*";
const apikey = "sb_publishable_8aAGeEaZHt4J8DmzyTwdSA_znc7IeGL";

console.log(window.location.href);
const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

fetch(URL, {
  headers: {
    "Content-Type": "application/json",
    apikey: apikey,
  },
})
  .then((response) => response.json())
  .then((dataArr) => {
    // CREATE HTML TEMPLATE AND INJECT DATA
    let data;

    if (id) {
      data = dataArr.find((item) => item.id == id);
      const container = document.querySelector(".singleview-container");

      console.log(data);

      const template = `
        <div id="container" class="singleview-container">
        
        <div class="activity_card">
        
        <div class="left_column">
        <img src="${data.image}" alt="${data.location}" class="${data.image}" />
        <div class="title_row">
        <span class="dot"></span>
        <h2>${data.location}</h2>
        </div>
        
        <h1>${data.title_1}</h1>
        <br>
        <br>
        <p>${data.description_4}</p>
        </div>
        
        <div class="right_column">
        <div class="text_block">
        <img src="img/blomst.svg" alt="flower" class="flower_icon" />
        <h3>${data.title_2}</h3>
        <p> ${data.description_1}</p> <br>
        
        <h4>${data.category_1}</h4>
        <p>${data.description_2}</p> <br>
        
        <h4>${data.category_2}</h4>
        <p>${data.description_3}
        <br><br>
        </p>
        <p>${data.text}</p>
        <div class="btn-rod">
        <a href=${data.button_link} class="link-btn-rod">${data.button_text}</a>
        </div>
        </div>
        </div>
        `;

      container.innerHTML = template;
    } else {
      data = dataArr;
      const container = document.querySelector(".aktiviteter-container");

      data.map((item) => {
        console.log(item);

        const template = `<div class="aktivitet-card">
                    <img src="${item.acard_image}" alt="vandreture">
                    <h3>${item.card_title}</h3>
                    <p>${item.ptekst}</p>

                    <div class="lokation">
                        <span class="dot"></span>
                        <h3>${item.acard_subtitle}</h3>
                    </div>

                    <a href="/singleview.html?id=${item.id}" class="naturencards-btn">Se mere</a>
                </div>`;

        container.innerHTML += template;
      });
    }
  });

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// const response = await fetch(URL, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     apikey: apikey,
//   },
// });

// console.log(response);

//const data = await response.json();
//console.log(data);

//data.map((item) => {
