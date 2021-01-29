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