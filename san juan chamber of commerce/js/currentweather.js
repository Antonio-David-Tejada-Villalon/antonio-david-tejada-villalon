const apiOW =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-31.5375&lon=-68.536392&exclude=current,alerts&appid=f2d1a5e40996e4db6f64e25ba3b67c8f&units=metric";
//Showing the current day
fetch(apiOW)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    //console.log(jsObject.alert); //there are not alerts in this zone or Json
    const d = new Date();
    //console.log(d.getDay());
    //console.log(jsObject.daily[d.getDay()].weather[0].main);
    //console.log(jsObject.daily[d.getDay()].temp.day);
    if(d.getDay() <= 7){
      document.getElementById("wcurrent").textContent =
      jsObject.daily[d.getDay()].weather[0].main +
      " " +
      jsObject.daily[d.getDay()].temp.day;
    document.getElementById("descriptionw").textContent =
      jsObject.daily[d.getDay()].weather[0].description;
    document.getElementById("humidity").textContent =
      jsObject.daily[d.getDay()].humidity;
    }

    const daysa = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let c = 0;

    //Forecasting just three days in a row in a week

    for (let i = 0; i < jsObject.daily.length; i++) {
      c += 1;
      if (c == 1) {
        let forecast = document.createElement("div");
        let forecast1 = document.createElement("div");
        let forecast2 = document.createElement("div");
        let daynamet = document.createElement("h4");
        let daynamen = document.createElement("h4");
        let daynament = document.createElement("h4");
        let image = document.createElement("img");
        let imagen = document.createElement("img");
        let imagent = document.createElement("img");
        let tempt = document.createElement("h5");
        let temptn = document.createElement("h5");
        let temptnt = document.createElement("h5");

        forecast.setAttribute('class', 'threedays');
        forecast1.setAttribute('class', 'threedays1');
        forecast2.setAttribute('class', 'threedays2');

        //Today

        daynamet.textContent = daysa[d.getDay()];
        image.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" +
            jsObject.daily[d.getDay()].weather[0].icon +
            ".png"
        );
        tempt.textContent = jsObject.daily[d.getDay()].temp.day + " °C";

        //Today + 1
        //console.log(d.getDay());
        //console.log(jsObject.daily)
        //console.log(jsObject.daily[i].dt);
        let dia = d.getDay();

        if(dia <= 5){
          daynamen.textContent = daysa[d.getDay() + 1];
        imagen.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" +
            jsObject.daily[d.getDay() + 1].weather[0].icon +
            ".png"
        );
        temptn.textContent = jsObject.daily[d.getDay() + 1].temp.day + " °C";
        } else {
          dia = 0;
          daynamen.textContent = daysa[dia];
        imagen.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" +
            jsObject.daily[dia].weather[0].icon +
            ".png"
        );
        temptn.textContent = jsObject.daily[dia].temp.day + " °C";
        }

        //(Today+1)+1
        //console.log(dia);
        let nextdia = d.getDay();
        //console.log(nextdia);


        if(nextdia <= 5) {
          daynament.textContent = daysa[(d.getDay() + 1) + 1];
          imagent.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" +
            jsObject.daily[(d.getDay() + 1) + 1].weather[0].icon +
            ".png"
          );
          temptnt.textContent = jsObject.daily[(d.getDay() + 1) + 1].temp.day + " °C";
        } else {
          nextdia = 0;
          daynament.textContent = daysa[nextdia+1];
          imagent.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" +
            jsObject.daily[nextdia+1].weather[0].icon +
            ".png"
          );
          temptnt.textContent = jsObject.daily[nextdia+1].temp.day + " °C";
        }

        forecast.appendChild(daynamet);
        forecast.appendChild(image);
        forecast.appendChild(tempt);
        forecast1.appendChild(daynamen);
        forecast1.appendChild(imagen);
        forecast1.appendChild(temptn);
        forecast2.appendChild(daynament);
        forecast2.appendChild(imagent);
        forecast2.appendChild(temptnt);

        document.querySelector("div.forecas-days").appendChild(forecast);
        document.querySelector("div.forecas-days").appendChild(forecast1);
        document.querySelector("div.forecas-days").appendChild(forecast2);        
      }

      //console.log(jsObject.alerts);

      if(c==1){
        if(jsObject.alerts == undefined){
          window.alert("There isn't an alert in: " + jsObject.timezone);
        } else {
          let msg= jsObject.alerts[i].events;
          window.alert(msg);
        }
      }
    }
  });
