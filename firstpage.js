const navEl =document.querySelector("nav");
const navTriggerEl =document.querySelector(".hamburger")
const hamburgerBarsEl=document.getElementsByTagName("span");
const content =document.querySelector(".content");



function toggleNav(){
    navTriggerEl.addEventListener("click", function(){
        navEl.classList.toggle("open");
        contentEl.classList.toggle("shift");
        animateHamburgers();
        
    })
}

function animateHamburgers(){
    for (let item of hamburberBarsEl){
       item.classList.toggle("change");
    }
}

toggleNav();