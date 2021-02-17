//get all imgs with data-src attribute
/*const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntersectionalObserver 
const imgOptions = {
    threshold: 0;
    rootMargin: "0px 0px 50px 0px";
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { image.removeAttribute('data-src');};
};

//first check to see if Intersection Observer is supported

if ("IntersectionObserver" in window) {
     const observer = new IntersectionObserver((items, observer) => {
         items.forEach((item) => {
           if (item.isIntersecting) {
             loadImages(item.target);
             observer.unobserve(item.target);
           }
         });
       });
       imagesToLoad.forEach((img) => {
         observer.observe(img);
       });
     } else {
       imagesToLoad.forEach((img) => {
         loadImages(img);
       });
     }*/

//Get all the images with data-src attribute
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
}

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};

//loop through the images and determine which ones need to be shown
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});