const businessURL = "js/business.json";

fetch(businessURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const business = jsonObject["business"];
    for (let i = 0; i < business.length; i++) {
        let upcomingevent = document.createElement("div");      
        let image = document.createElement("img");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let link = document.createElement("a");

      upcomingevent.setAttribute('class', 'b0');
      image.setAttribute("src", `img/${business[i].logo}`);
      image.setAttribute("alt", business[i].name);
      image.setAttribute('class', 'b1')
      p2.textContent = "Address: " + business[i].address;
      p2.setAttribute('class', 'b2');
      p3.textContent = "Phone: " + business[i].phone;
      p3.setAttribute('class', 'b3');
      link.setAttribute('href', business[i].link);
      link.textContent = business[i].name;
      link.setAttribute('class', 'b4');

      upcomingevent.appendChild(image);
      upcomingevent.appendChild(p2);
      upcomingevent.appendChild(p3);
      upcomingevent.appendChild(link);

      document.querySelector("div.ltg").appendChild(upcomingevent);
    }
  });