// initialize the map
var mymap = L.map("mapid").setView([35.85504815, -78.8406595376177], 13);

// load a tile layer
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiYWJoaW5heWFhMTc4NyIsImEiOiJjanV4aGlqNzUwbjduM3ltd2J1YTVjNXhuIn0.Bz3gZ4NIgZagdLg_ZoFuEQ",
  {
    attribution:
      // eslint-disable-next-line prettier/prettier
      "Map data &copy; <a href=\'https://www.openstreetmap.org/\'>OpenStreetMap</a> contributors, <a href=\'https://creativecommons.org/licenses/by-sa/2.0/\'>CC-BY-SA</a>, Imagery © <a href=\'https://www.mapbox.com/\'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "sk.eyJ1IjoiYWJoaW5heWFhMTc4NyIsImEiOiJjanV4aGlqNzUwbjduM3ltd2J1YTVjNXhuIn0.Bz3gZ4NIgZagdLg_ZoFuEQ"
  }
).addTo(mymap);
// eslint-disable-next-line no-unused-vars
var marker = L.marker([35.85504815, -78.8406595376177]).addTo(mymap);
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = $(".mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
