// MENU FILTER
// Set Menu Filter Variables
const filterContainer = document.querySelector(".menu-filter");
const filterBtns = filterContainer.children;
const totalFilterBtns = filterBtns.length;
const menuItems = document.querySelectorAll(".menu-item");
const totalMenuItems = menuItems.length;
const splash = document.querySelector(".splash");

// Set Splash Image Variables
let all = document.querySelector('#all');
let starters = document.querySelector('#starters');
let mains = document.querySelector('#mains');
let drinks = document.querySelector('#drinks');
let desserts = document.querySelector('#desserts');

// Add Event Listeners for Splash Image Changes
all.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash-all.png)";
})
starters.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash-starters.png)";
})
mains.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash-main2.png)";
})
drinks.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash-drinks.png)";
})
desserts.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash-desserts2.png)";
})

// Filter and Display Items for the Selected Category
for(let i = 0; i < totalFilterBtns; i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for(let k = 0; k < totalMenuItems; k++){
            if(filterValue === menuItems[k].getAttribute("data-category")){
                menuItems[k].classList.remove("hide");
                menuItems[k].classList.add("show");
            }
            else {
                menuItems[k].classList.remove("show");
                menuItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                menuItems[k].classList.remove("hide");
                menuItems[k].classList.add("show");
            }
        }
    })
}