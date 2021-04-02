const apiOW =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-31.5375&lon=-68.536392&exclude=current,alerts&appid=f2d1a5e40996e4db6f64e25ba3b67c8f&units=metric";
//Showing the current day
fetch(apiOW)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
    console.log(jsObject.timezone);
    console.log(jsObject.daily);
    console.log(jsObject.alert); //there are not alerts in this zone or Json
    const d = new Date();
    //console.log(d.getDate());
    //console.log(d.getDay());
    //console.log(jsObject.daily[d.getDay()].weather[0].main + "/" + jsObject.daily[d.getDay()].temp.day);
    document.getElementById("wcurrent").textContent =
      jsObject.daily[d.getDate()].weather[0].main +
      " " +
      jsObject.daily[d.getDay()].temp.day;
    document.getElementById("descriptionw").textContent =
      jsObject.daily[d.getDate()].weather[0].description;
    document.getElementById("humidity").textContent =
      jsObject.daily[d.getDate()].humidity;

    const daysa = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let c = 0;
    //console.log(d.getDate());

    //Forecasting just three days in a row in a week

    for (let i = 0; i < jsObject.daily.length; i++) {
      //console.log(i);
      //console.log(c+=1);
      c += 1;
      if (c == 1) {
        //console.log(d.getDate());
        //console.log(d.getDay());
        //console.log(daysa[d.getDate() + d.getDay() - 1]);
        //console.log(daysa[d.getDate() + d.getDay()]);
        //console.log(daysa[d.getDate() + d.getDay() + 1]);
        let forecast = document.createElement("div");
        let daynamet = document.createElement("h4");
        let daynamen = document.createElement("h4");
        let daynament = document.createElement("h4");
        let image = document.createElement("img");
        let imagen = document.createElement("img");
        let imagent = document.createElement("img");
        let tempt = document.createElement("h5");
        let temptn = document.createElement("h5");
        let temptnt = document.createElement("h5");

        daynamet.textContent = daysa[d.getDate() + d.getDay() - 1];
        image.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" +
            jsObject.daily[d.getDate() + d.getDay() - 1].weather[0].icon +
            ".png"
        );
        tempt.textContent =
          jsObject.daily[d.getDate() + d.getDay() - 1].temp.day + " °C";
        daynamen.textContent = daysa[d.getDate() + d.getDay()];
        imagen.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" +
            jsObject.daily[d.getDate() + d.getDay()].weather[0].icon +
            ".png"
        );
        temptn.textContent =
          jsObject.daily[d.getDate() + d.getDay()].temp.day + " °C";
        daynament.textContent = daysa[d.getDate() + d.getDay() + 1];
        imagent.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" +
            jsObject.daily[d.getDate() + d.getDay() + 1].weather[0].icon +
            ".png"
        );
        temptnt.textContent =
          jsObject.daily[d.getDate() + d.getDay() + 1].temp.day + " °C";

        forecast.appendChild(daynamet);
        forecast.appendChild(image);
        forecast.appendChild(tempt);
        forecast.appendChild(daynamen);
        forecast.appendChild(imagen);
        forecast.appendChild(temptn);
        forecast.appendChild(daynament);
        forecast.appendChild(imagent);
        forecast.appendChild(temptnt);

        document.querySelector("div.forecas-days").appendChild(forecast);
      }
    }
  });
