// window.onscroll = function () {
//     myFunction()
// };

// // function myFunction() {
// //     if (document.documentElement.scrollTop > 350) {
// //         document.getElementById("scroll-img").attributes = "slideUp";
// //     }
// // }

// document.addEventListener("scroll", () => {
//     let scroll = document.getElementById("scroll-img");
//     let scrollheight = 0;

//     window.scrollY < 0 ? scrollheight = 0 :
//         (window.scrollY > 255 ? scrollheight = 255 :
//             scrollheight = window.scrollY
//         );

//     scroll.style.background = "rgb"(
//         ${scrollheight},
//         ${scrollheight},
//         ${scrollheight})      
//             });

// function myFunction() {
//     if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
//         scroll.classList.add("mainblur");
//     }
//     else {
//         scroll.classList.remove("mainblur");
//     }
// }


//  navMain.addEventListener("click", function(){
//          navToggle.classList.toggle("nav-main");
//  })
//  window.onscroll = () => {
//     navToggle.classList.remove("nav-main");
// };


// document.addEventListener('click', () => {
    let navMain = document.querySelector("#navtoggle");
    let navtoggle = document.querySelector("#navtoggleBtn");

    navtoggle.addEventListener('click', () => {
        navMain.classList.toggle('nav-main');
    });
    