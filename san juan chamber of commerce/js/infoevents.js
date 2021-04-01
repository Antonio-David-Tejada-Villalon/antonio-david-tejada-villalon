const upcomingURL =
  "js/events.json";

fetch(upcomingURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
        let upcomingevent = document.createElement("div");      
        let p1 = document.createElement("h4");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");

      upcomingevent.setAttribute('class', 'eventual');
      p1.textContent = towns[i].name;
      p1.setAttribute('class', 'par1')
      p2.textContent = towns[i].events[0];
      p2.setAttribute('class', 'slinea');
      p3.textContent = towns[i].events[1];
      p3.setAttribute('class', 'tlinea');
      p4.textContent = towns[i].events[2];

      upcomingevent.appendChild(p1);
      upcomingevent.appendChild(p2);
      upcomingevent.appendChild(p3);

      document.querySelector("div.upcomingevents").appendChild(upcomingevent);
    }
  });