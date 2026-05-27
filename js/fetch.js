const URl =
  "https://gnnsqekkjgykgsiatjms.supabase.co/rest/v1/activities?select*&apikey=sb_publishable_8aAGeEaZHt4J8DmzyTwdSA_znc7IeGL";
const urlparams = await new URLSearchParams(window.location.search).toString();

console.log(URL);
console.log(apikey);

const response = await fetch(URL + urlparams, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    apikey: apikey,
  },
});

const data = await response.json();
console.log(data);

//data.map((item) => {
