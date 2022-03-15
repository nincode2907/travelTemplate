const bar = document.querySelector(".header_bar")
const menu = document.querySelector(".nav_bar")
const barExit = document.querySelector(".bar_close")

//open sidebar 
menu.addEventListener("click", () => {
    bar.classList.add("header_bar_fade")
})

barExit.addEventListener("click", () => {
    bar.classList.remove("header_bar_fade")

})