const navbar = document.querySelector(".header-nav");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", toggleHamburger);

function toggleHamburger(){
    navbar.classList.toggle("showNav")
    hamburger.classList.toggle("showClose")
  };

const menuItems = document.querySelectorAll(".menu_item");

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleHamburger) 
    }
  );

