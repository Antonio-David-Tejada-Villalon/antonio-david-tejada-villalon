const apiOW = "https://api.openweathermap.org/data/2.5/onecall?lat=-31.5375&lon=-68.536392&exclude=current&appid=f2d1a5e40996e4db6f64e25ba3b67c8f&units=metric";

fetch(apiOW)
.then((response) => response.json())
.then((jsObject) => {
    //console.log(jsObject);
    //console.log(jsObject.daily);
    const d = new Date();
    console.log(d.getDay());
    //console.log(jsObject.daily[d.getDay()].weather[0].main + "/" + jsObject.daily[d.getDay()].temp.day);
    document.getElementById("wcurrent").textContent = jsObject.daily[d.getDay()].weather[0].main + " " + jsObject.daily[d.getDay()].temp.day;
    document.getElementById("descriptionw").textContent = jsObject.daily[d.getDay()].weather[0].description;
    document.getElementById("humidity").textContent = jsObject.daily[d.getDay()].humidity;

    const daysa = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let c=0;
    console.log(d.getDate());

    for (let  i= 0;  i< jsObject.daily.length; i++) {
        console.log(i);
        //console.log(jsObject.daily[i]);
        console.log(c+=1);
        console.log(daysa[i]);
    }
})