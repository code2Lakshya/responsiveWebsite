const mobile_nav=document.querySelector(".mobile-navbar-button");
const header=document.querySelector(".header");

const toggleBtn=()=>{
    header.classList.toggle("active");
};
mobile_nav.addEventListener("click",()=>toggleBtn());