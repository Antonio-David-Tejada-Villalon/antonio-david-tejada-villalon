const upcomingURL =
  "js/currentevents.json";

fetch(upcomingURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    let m = new Date();
    //console.log(m.getMonth());
    const festival = jsonObject["festivals"];
    for (let i = 0; i < festival.length; i++) {
        //console.table(festival[i].name);
        if(festival[i].name != undefined){
            if(i >= m.getMonth()){
        let upcomingevent = document.createElement("div");      
        let p1 = document.createElement("h4");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

      upcomingevent.setAttribute('class', 'eventual');
      p1.textContent = festival[i].month;
      p1.setAttribute('class', 'par1')
      p2.textContent = festival[i].name;
      p2.setAttribute('class', 'slinea');
      p3.textContent = festival[i].events;
      p3.setAttribute('class', 'tlinea');


      upcomingevent.appendChild(p1);
      upcomingevent.appendChild(p2);
      upcomingevent.appendChild(p3);

      document.querySelector("div.upcomingeventsm").appendChild(upcomingevent);
            }
        }
    }
  });