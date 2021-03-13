const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f2d1a5e40996e4db6f64e25ba3b67c8f&units=imperial";

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        //console.log(jsObject);
        let c = 0;
        jsObject.list.forEach(element => {
            // console.log(element);
            // console.log(element.dt_txt);
            const hour = element.dt_txt.substring(11, 13);
            //console.log(c);
            // console.log(hour);
            if (hour == "18") {
                //console.log(days[c]);
                // console.log(element);
                // console.log(element.main.temp);
                let fct = document.createElement("section");
                let h2 = document.createElement("h2");
                let h3 = document.createElement("h3");
                let image = document.createElement("img");

                fct.setAttribute('class', 'tab');
                h2.textContent = days[c];
                h3.textContent = element.main.temp + " \u00B0F";
                image.setAttribute("src", "https://openweathermap.org/img/w/" + jsObject.list[c].weather[0].icon + ".png");
                image.setAttribute("alt", jsObject.list[c].weather[0].description);
                c += 1;
                // console.log(c);

                fct.appendChild(h2);
                fct.appendChild(image);
                fct.appendChild(h3);

                document.querySelector("div.fc").appendChild(fct);
            }
        });
    });