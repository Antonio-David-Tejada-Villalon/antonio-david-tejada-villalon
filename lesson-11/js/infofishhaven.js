const upcomingURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(upcomingURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
        if(towns[i].name == "Fish Haven") {
        let upfishhaven = document.createElement("section");
        let sp = document.createElement("div");      
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");

      upfishhaven.setAttribute('class', 'eventual');
      p1.setAttribute('class', 'par1')
      p1.textContent = "Upcoming Events:";
      sp.setAttribute('class', 'linea');
      p2.textContent = towns[i].events[0];
      p3.textContent = towns[i].events[1];
      p4.textContent = towns[i].events[2];
      p5.textContent = towns[i].events[3];

      upfishhaven.appendChild(p1);
      upfishhaven.appendChild(sp);
      upfishhaven.appendChild(p2);
      upfishhaven.appendChild(p3);
      upfishhaven.appendChild(p4);
      upfishhaven.appendChild(p5);

      document.querySelector("div.upfishhaven").appendChild(upfishhaven);
        }
    }
  });