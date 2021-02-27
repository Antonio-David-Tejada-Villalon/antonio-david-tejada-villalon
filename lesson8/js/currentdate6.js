let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate =
    dayName +
    ", " +
    d.getDate() +
    " " +
    monthName +
    " " +
    d.getFullYear();

document.getElementById("todays").textContent = fulldate;

document.getElementById("currentyear").textContent = d.getFullYear();

if (daynames[d.getDay()] == "Friday") {
    document.getElementById("banner").textContent = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("banner").style.backgroundColor= "#1F213D";
    document.getElementById("banner").style.color= "#E1F1FF";
    document.getElementById("banner").style.width = "100%";
    /*document.getElementById("banner").style.display = "flex";*/
    document.getElementById("banner").style.textAlign = "center";

}

const lastmodification = document.querySelector('#time');
lastmodification.textContent = document.lastModified;