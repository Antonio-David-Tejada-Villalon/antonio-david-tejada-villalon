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
      let dat = document.createElement("section");
      let art = document.createElement("article");
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let image = document.createElement("img");

      dat.setAttribute('class', 'info');
      art.setAttribute('class', 'arcle');
      h2.setAttribute('class', 'htitle');
      h2.textContent = towns[i].name;
      p1.setAttribute('class', 'para');
      p1.textContent = towns[i].motto;
      p2.setAttribute('class', 'para');
      p2.textContent = "Year Founded:" + " " + towns[i].yearFounded;
      p3.setAttribute('class', 'para');
      p3.textContent = "Current Population:" + " " + towns[i].currentPopulation;
      p4.setAttribute('class', 'para');
      p4.textContent = "Average RainFall:" + " " + towns[i].averageRainfall;
      image.setAttribute('class', 'imgt');
      image.setAttribute("src", `images/${towns[i].photo}`);
      image.setAttribute("alt", towns[i].name);

      art.appendChild(h2);
      art.appendChild(p1);
      art.appendChild(p2);
      art.appendChild(p3);
      art.appendChild(p4);
      dat.appendChild(art);
      dat.appendChild(image);

      document.querySelector("div.dat").appendChild(dat);
    }
  });
