/* 
    Author : Ayush Rusiya 
    Date: 04/05/2021 
*/
const container = document.querySelector(".container");
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
var date=yesterday.toDateString();
var test=date[8]+date[9];
yesterday.setDate(yesterday.getDate() - 1);
date=yesterday.toDateString();
var year=date[11]+date[12]+date[13]+date[14];
var day=date[8]+date[9];
var month=date[4]+date[5]+date[6];
if (month=="Jan"){
    month="01";
}
if (month=="Feb"){
    month="02";
}
if (month=="Mar"){
    month="03";
}
if (month=="Apr"){
    month="04";
}
if (month=="May"){
    month="05";
}
if (month=="Jun"){
    month="06";
}
if (month=="Jul"){
    month="07";
}
if (month=="Aug"){
    month="08";
}
if (month=="Sep"){
    month="09";
}
if (month=="Oct"){
    month="10";
}
if (month=="Nov"){
    month="11";
}
if (month=="Dec"){
    month="12";
}
date=`${year}-${month}-${day}`;
console.log(date);
let link=`https://api.covid19api.com/live/country/india/status/confirmed/date/${date}`;
console.log(link);
const createCardList = (array) => {
    container.innerHTML = "";
    array.forEach((obj) => {
        console.log(obj.Date[8]+obj.Date[9],day)
        if (obj.Date[8]+obj.Date[9]==test){
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <div class="state">${obj.Province}</div>
            <div class="confirmed data"><img src="virus.jpg", width="30px", height="25px">  confirmed: ${obj.Confirmed}</div>
            <div class="recovered data"><img src="recover.jpg", width="30px", height="25px">  recovered: ${obj.Recovered}</div>
            <div class="active data"><img src="virus.jpg", width="30px", height="25px">  active: ${obj.Active}</div>
            <div class="deceased data"><img src="rip.jfif", width="30px", height="25px">  deceased: ${obj.Deaths}</div>
            `;
            container.appendChild(card);
            ;
        }
})}
fetch(link)
  .then((data) => {
    return data.text();
    // return data.json();
    // console.log ka example
  })
  .then((result) => {
    let usersArray = JSON.parse(result);
    createCardList(usersArray);
  });