'use strict'

/*
* ADD MULTIPLE EVENTS ON MULTIPLE ELEMNTS
*/ 
const addEventOnElem = function (elem , type , callback){
if (elem.length > 1) {
    for(let i = 0 ; i < elem.length ; i++){
        elem[i].addEventListener(type , callback)
    }
} else {
    elem.addEventListener(type , callback)
}
}

/*
* PRELOADER
*/ 

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load" , () => {
    setTimeout(() => {
        preloader.classList.add("remove")
    }, 1000);
});

/*
*  NAVBAR NAVLIST ACTIVE OR REMOVE
*/

const navbar = document.querySelector("[data-navbar]")
const navLinks = document.querySelectorAll("[data-nav-link]")
const navToggler = document.querySelector("[data-nav-toggler]")

const toggleNavbar = function () {
  navbar.classList.toggle("active")
  navToggler.classList.toggle("active")
}

addEventOnElem(navToggler , "click" , toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active")
    navToggler.classList.remove("active")
}
  
  addEventOnElem(navLinks , "click" , closeNavbar);


/*
*  HEADER ACTIVE
*/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll" , function(){
    if(window.scrollY > 100){
        header.classList.add("active")
        header.style.background = "#0D1117";
    }else{
        header.classList.remove("active")
        header.style.background = "transparent";
    }
})

/*
* INCREAMENT NUMBERS ON PAGE LOADS
*/

const counterNum = document.querySelectorAll(".strong");

const speed = 5 ;

counterNum.forEach(curElem => {
    const updateNum = () => {

        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber)

        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const increamentNumber  = Math.trunc(targetNumber / speed )
        // console.log(increamentNumber);

        if(initialNum < targetNumber){
            curElem.innerText = `${initialNum + increamentNumber}+`

            setTimeout(updateNum , 1000) ;
        }

    }

  updateNum()
    
});

/*
* ACTIVE LINKS ON SCROLLING DIFFERENT SECTIONS
*/ 
$(document).ready(function () {
    $(window).on("scroll", function () {
      // Get the current scroll position
      var scrollPos = $(document).scrollTop();
  
      // Initialize a variable to track the active section
      var activeSection = "";
  
      // Loop through each section and check if it's in the viewport
      $("section").each(function () {
        var sectionOffset = $(this).offset().top;
        var sectionHeight = $(this).outerHeight();
  
        if (scrollPos >= sectionOffset && scrollPos < sectionOffset + sectionHeight) {
          // Update the active section
          activeSection = $(this).attr("id");
        }
      });
  
      // Remove active class from all navigation links
      $("nav a").removeClass("active");
  
      // Add active class to the corresponding navigation link for the active section
      if (activeSection !== "") {
        $('nav a[href="#' + activeSection + '"]').addClass("active");
      }
    });
});








function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('hrs').textContent = `${hours}`  ;
    document.getElementById('mins').textContent = `${minutes}`  ;
    document.getElementById('sec').textContent = `${seconds}` ;
  }
  setInterval(updateClock, 1000);
  window.onload = updateClock;

// ---------------------------------------------

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}