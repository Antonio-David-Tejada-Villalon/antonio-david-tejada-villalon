function toggleMenu(){
    //console.log(document.getElementById('primaryNav').classList);
    document.getElementById('primaryNav').classList.toggle('hide');
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
  }