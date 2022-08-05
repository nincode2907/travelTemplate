const bar = document.querySelector(".header_bar")
const menu = document.querySelector(".nav_bar")
const barExit = document.querySelector(".bar_close_pc")
const menuTabletExit = document.querySelector(".menu_close_tablet")
const search = document.querySelector(".header_body_search")
const optionSearch = document.querySelector(".header_body_search_options")
const searchOptions = document.querySelectorAll(".header_body_search_option")
const searchValue = document.querySelector(".header_body_search_description")
const quantiPackages = document.querySelectorAll(".tour_info_package_quantity")
const textPackages = document.querySelectorAll(".tour_info_package_text")
const menuBarTablet = document.querySelector(".nav_list")

// const nav = document.querySelector(".header_nav")

//open sidebar 
menu.addEventListener("click", () => {
    bar.classList.add("header_bar_fade")
    if (window.innerWidth <= 1208) {
        menuBarTablet.classList.toggle("header_bar_fade")
    }
})

barExit.addEventListener("click", () => {
    bar.classList.remove("header_bar_fade")
})

menuTabletExit.addEventListener("click", () => {
    menuBarTablet.classList.remove("header_bar_fade")
})

//options search
search.addEventListener("click", () => {
    optionSearch.classList.toggle("hidden")
})

for (const option of searchOptions) {
    option.onclick = (e) => {
        searchValue.innerHTML = e.target.innerHTML;
    }
}

//packageText
quantiPackages.forEach((item, index) => {
    (item.innerHTML == 1) && (textPackages[index].innerHTML = "package")
})