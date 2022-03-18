// Format Date
setInterval(function () {
    var d = new Date()
    document.querySelector('.hour .time-number').innerHTML = d.getHours()
    document.querySelector('.minute .time-number').innerHTML = d.getMinutes()
    document.querySelector('.second .time-number').innerHTML = d.getSeconds()
}, 1000)

// SLIDE
var slides = document.getElementsByClassName("slide-img");
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    //   var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[]
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }

    //   dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}