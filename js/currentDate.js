/*const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",];
const months = [
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
	"December",];
const todaysdate = new Date();
const dayNames = daynames[todaysdate.getDay()];
const monthNames = months[todaysdate.getMonth()];
const currentdate = dayNames + ", " + todaysdate.getDate() + " " + monthNames + ", " + todaysdate.getFullYear();
document.getElementById("currentdate").textContent = currentdate;
document.getElementById("currentyear").textContent = todaysdate.getFullYear();*/
const lastmodification = document.querySelector('#time');
lastmodification.textContent = document.lastModified;