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

/*
* SHOWING TEXT WHEN FORM IS SUBMITTED
*/
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");
    var thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // You can add form validation here if needed
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      // Assuming the form is valid, hide the form and display the "thank you" message
      form.style.display = "none";
      thankYouMessage.style.display = "block";
    });
});

/* 
* GETTING A MAIL VIA USING A MAIL.JS 
*/
function sendMail(){
  var params = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value ,
    message : document.getElementById('message').value 
  }

const serviceID = "service_xqy2njv" ;
const templateID = "template_6zb2ozd" ;
// service_xqy2njv 

emailjs.send(serviceID , templateID , params)
.then(
  res => { 
  document.getElementById("name").value = "" ,
  document.getElementById('email').value = "" ,
  document.getElementById('message').value = "" ;
  console.log(res);
})
.catch( error => {
  console.log(error)
})}


// LOAD NEXT PAGE ON CONTACT / WORKK (⚠️ NOTE : THIS METHOD IS TEMPORARLY DISABLED Ref . ctrl + click => because 180 script.js)
// const resume = document.querySelector("[data-resume-card]");
// resume.addEventListener('click' , () => {
//   window.location.href = "frontend.html";
// })

//! SCROLL REVEAL
//? COMMON SCROLLING OPTION
ScrollReveal({ 
reset: true ,
distance : '60px' ,
duration : 2500 ,
delay : 2400 
});

//? TARGETTING ELEMENTS AND USE CUSTOM SCROLL
function ScrollRevealHolder() { 
// HEADER
// ScrollReveal().reveal('.header', { delay: 300 , origin : 'top' });

// HERO IMAGE 
// ScrollReveal().reveal('.hero-banner', { delay: 100 , distance : '50px' , opacity : 0 , origin : 'top' });

// HERO TEXT CONTENT 
// ScrollReveal().reveal('.hero-content', { delay: 1000 , duration : 1000  , distance : '100px' , origin : 'top' });
ScrollReveal().reveal('.owner', { delay: 1000 , duration : 1000  , distance : '20px' , origin : 'left' });
ScrollReveal().reveal('h1', { delay: 1000 , duration : 1000  , distance : '20px' , origin : 'right' });
// hero-list
ScrollReveal().reveal('.list-link', { delay: 1000 , duration : 1000  , distance : '50px' , origin : 'top' , interval:400});
// btn-prime
ScrollReveal().reveal('.btn-prime', { delay: 1000 , duration : 1000  , distance : '50px' , origin : 'left' , interval:500});

// PORTFOLIO
ScrollReveal().reveal('.has-scrollbar', { delay: 1000 , duration : 1000  , distance : '50px' , origin : 'bottom'  });

// SKILLS
// ScrollReveal().reveal('.hero-banner', { delay: 500 , distance : '100px' , opacity : 0 , origin : 'bottom' });

ScrollReveal().reveal('.skills-list', { delay: 500 , distance : '100px' , origin : 'bottom' });


// TIMELINE
ScrollReveal().reveal('.timeline-list', { delay: 500 , distance : '300px' , origin : 'bottom' });

// PRICE
ScrollReveal().reveal('.left', { delay: 500 , distance : '10px' , origin : 'left' , interval : 200});
ScrollReveal().reveal('.right', { delay: 500 , distance : '10px' , origin : 'right' , interval : 200 });

// CONTACT
// ScrollReveal().reveal('.contact-content', { delay: 500 , distance : '80px' , origin : 'left' , interval : 200});
ScrollReveal().reveal('.contact-item', { delay: 500 , distance : '10px' , origin : 'top' , interval : 400});

// CONTACT INPUTS
// ScrollReveal().reveal('.contact-form', { delay: 500 , distance : '300px' , origin : 'top' , interval : 200});

// FOOTER
// ScrollReveal().reveal('.footer', { delay: 1000 , distance : '5px' , origin : 'top' , opacity : 0});

//? FOR SECTION TITLE
ScrollReveal().reveal('.section-title', { delay: 500 , origin : 'left' });
}

//? COMMENT OR NOT SCROLLREVEAL FUNCTION FOR SHIOW ANIMATION OR NOT 
ScrollRevealHolder();

//! FOR SHOWING POP-UP 
// commented out 
/*var popUp = document.querySelector("[data-pop-up]");
setTimeout(() => {
  popUp.style.display = "grid"

  document.querySelector(".main").style.filter = "blur(20px)";
  document.querySelector(".header").style.filter = "blur(20px)";
  
}, 500);

const closePopUp = document.querySelector(".close-pop-up");

closePopUp.addEventListener("click" , () => { 
  popUp.style.display = "none"
  document.querySelector(".main").style.filter = "blur(0px)";
  document.querySelector(".header").style.filter = "blur(0px)";
})

setTimeout(() => {
  popUp.style.display = "none"
  document.querySelector(".main").style.filter = "blur(0px)";
  document.querySelector(".header").style.filter = "blur(0px)";
}, 5000); 

*/
// -------------------------------------------------------------
function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
window.onload = updateClock;