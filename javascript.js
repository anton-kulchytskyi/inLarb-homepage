// Sidenav menu for small (mobile) screen
$(document).ready(function(){
    $('.sidenav').sidenav({edge: 'right'});
});

// Dropdown menu for user account
$('.dropdown-trigger').dropdown();

// Fullscreen slideshow with top events
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

// Slider with upcoming events
const gap = 16;

const slider = document.getElementById("slider"),
  // content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  slider.scrollBy(width + gap, 0);
});
prev.addEventListener("click", e => {
  slider.scrollBy(-(width + gap), 0);
});

let width = slider.offsetWidth;
window.addEventListener("resize", e => (width = slider.offsetWidth));