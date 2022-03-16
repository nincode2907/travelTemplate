// Format Date

setInterval(function(){
    var d =new Date()
    document.querySelector('.hour .time-number').innerHTML = d.getHours()
    document.querySelector('.minute .time-number').innerHTML = d.getMinutes()
    document.querySelector('.second .time-number').innerHTML = d.getSeconds()
},1000)
