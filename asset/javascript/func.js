// Format Date
setInterval(function () {
    var d = new Date()
    document.querySelector('.hour .time-number').innerHTML = d.getHours()
    document.querySelector('.minute .time-number').innerHTML = d.getMinutes()
    if(d.getSeconds() < 10){
        document.querySelector('.second .time-number').innerHTML = "0" + d.getSeconds()
    }else {
        document.querySelector('.second .time-number').innerHTML = d.getSeconds()
    }
}, 1000)

// SLIDE

var slides = document.getElementsByClassName('slide-img')

var slideIndex = 0
showSlide()
function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0
    }
    slideIndex++
    slides[slideIndex - 1].style.display = "block"
    setTimeout(showSlide, 10000)

}

// Intro
const intro = document.querySelector('.intro')
const main = document.querySelector('#main')
window.addEventListener("load", function(){
    

    function introShow() {
        intro.style.display = "block"
        setTimeout(function () {
            intro.style.display = "none"
            main.style.display = "block"
        }, 2000)
    }
    
    var introShow = setTimeout(introShow, 0)
})


