/*const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f2d1a5e40996e4db6f64e25ba3b67c8f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temp = ((jsObject.main.temp - 273.15) * (9/5)) + 32;
    const imagesrc = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    document.getElementById("icon").setAttribute("alt", desc);
    document.getElementById("current-temp").textContent = temp.toFixed(2);
  });*/

  const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f2d1a5e40996e4db6f64e25ba3b67c8f&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const imagesrc = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    document.getElementById("icon").setAttribute("alt", desc);
    document.getElementById("current-temp").textContent = jsObject.main.temp;
  });