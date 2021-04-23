// Testimonials - Swiper JS Carousel
var swiper = new Swiper('.swiper-container', {
    speed: 4000,
    spaceBetween: 30,
    // effect: 'fade',
    centeredSlides: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// Animate on Scroll for Welcome and Display Sections
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

// MENU FILTER for food category items
  // menu items array
const menu = [
    {
        id: 1,
        title: "Starter1",
        category: "starters",
        price: 15.99,
        img: "img/starter1.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 2,
        title: "Starter2",
        category: "starters",
        price: 15.99,
        img: "img/starter1.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 3,
        title: "Starter3",
        category: "starters",
        price: 15.99,
        img: "img/starter1.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 4,
        title: "Main1",
        category: "mains",
        price: 15.99,
        img: "img/main1.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 5,
        title: "Main2",
        category: "mains",
        price: 15.99,
        img: "img/main2.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 6,
        title: "Main3",
        category: "mains",
        price: 15.99,
        img: "img/main3.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 7,
        title: "Drink1",
        category: "drinks",
        price: 15.99,
        img: "img/drink1.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 8,
        title: "Drink2",
        category: "drinks",
        price: 15.99,
        img: "img/drink2.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 9,
        title: "Drink3",
        category: "drinks",
        price: 15.99,
        img: "img/drink3.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 10,
        title: "Dessert1",
        category: "desserts",
        price: 15.99,
        img: "img/dessert1.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 11,
        title: "Dessert2",
        category: "desserts",
        price: 15.99,
        img: "img/dessert2.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
    {
        id: 12,
        title: "Dessert3",
        category: "desserts",
        price: 15.99,
        img: "img/dessert3.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio amet porro aliquam reprehenderit at. Corrupti maiores recusandae nobis consequuntur.`,
    },
];

// select the menu area
const sectionCenter = document.querySelector(".section-center");

// display menu items
window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
        return `<article class="menu-item">
                    <img src=${item.img} alt=${item.title} class="photo">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">
                            ${item.desc}
                        </p>    
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
});