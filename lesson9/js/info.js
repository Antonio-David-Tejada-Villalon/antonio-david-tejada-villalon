const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
      let data = document.createElement("section");
      let h2 = document.createElement("h2");
      let art = document.createElement("article");
      let image = document.createElement("img");

      h2.textContent = towns[i].name + " " + towns[i].photo;
      image.setAttribute("src", towns[i].photo);
      //image.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname);

      data.appendChild(h2);
      //data.appendChild(image);

      document.querySelector("div.data").appendChild(data);
    }
  });
