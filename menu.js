// MENU FILTER for food category items
  // menu items array
//   const menu = [
//     {
//         id: 1,
//         title: "Starter1",
//         category: "starters",
//         price: 15.99,
//         img: "img/starter1.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 2,
//         title: "Starter2",
//         category: "starters",
//         price: 15.99,
//         img: "img/starter1.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 3,
//         title: "Starter3",
//         category: "starters",
//         price: 15.99,
//         img: "img/starter1.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 4,
//         title: "Main1",
//         category: "mains",
//         price: 15.99,
//         img: "img/main1.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 5,
//         title: "Main2",
//         category: "mains",
//         price: 15.99,
//         img: "img/main2.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 6,
//         title: "Main3",
//         category: "mains",
//         price: 15.99,
//         img: "img/main3.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 7,
//         title: "Drink1",
//         category: "drinks",
//         price: 15.99,
//         img: "img/drink1.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 8,
//         title: "Drink2",
//         category: "drinks",
//         price: 15.99,
//         img: "img/drink2.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 9,
//         title: "Drink3",
//         category: "drinks",
//         price: 15.99,
//         img: "img/drink3.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 10,
//         title: "Dessert1",
//         category: "desserts",
//         price: 15.99,
//         img: "img/dessert1.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 11,
//         title: "Dessert2",
//         category: "desserts",
//         price: 15.99,
//         img: "img/dessert2.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
//     {
//         id: 12,
//         title: "Dessert3",
//         category: "desserts",
//         price: 15.99,
//         img: "img/dessert3.jpg",
//         desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
//     },
// ];

// select the menu area
// const sectionCenter = document.querySelector(".section-center");

// display menu items
// window.addEventListener("DOMContentLoaded", function () {
//     let displayMenu = menu.map(function (item) {
//         return `<article class="menu-item">
//                     <img src=${item.img} alt=${item.title} class="photo">
//                     <div class="item-info">
//                         <header>
//                             <h4>${item.title}</h4>
//                             <h4 class="price">$${item.price}</h4>
//                         </header>
//                         <p class="item-text">
//                             ${item.desc}
//                         </p>    
//                     </div>
//                 </article>`;
//     });
//     displayMenu = displayMenu.join("");
    //console.log(displayMenu);

//     sectionCenter.innerHTML = displayMenu;
// });


// new menu filter 2nd attempt
const filterContainer = document.querySelector(".menu-filter");
const filterBtns = filterContainer.children;
const totalFilterBtns = filterBtns.length;
const menuItems = document.querySelectorAll(".menu-item");
const totalMenuItems = menuItems.length;

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