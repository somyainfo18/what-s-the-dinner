const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburberBarsEl = document.getElementsByTagName("span");
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