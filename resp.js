navbar = document.querySelector(".navbar")
burger = document.querySelector(".burger")
navList = document.querySelector(".nav-list")
navright = document.querySelector(".navright")

burger.addEventListener("click", ()=>{
    navright.classList.toggle("v-class-resp");
    navList.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-class-resp");
})

