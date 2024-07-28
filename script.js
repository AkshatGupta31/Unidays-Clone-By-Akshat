const navBar = document.getElementById("data-navbar");
const navBarBtn = document.getElementById("data-nav-toggler");

const toggleFunction = function (){
  navBar.classList.toggle("active");
  navBarBtn.classList.toggle("active");
};
navBarBtn.addEventListener("click", toggleFunction);


// // close navbar
// const closeNavbar = function () {
//     navBar.classList.remove("active");
//     navBarBtn.classList.remove("active");
//   };
// navBarBtn.addEventListener("click", closeNavbar);


// // open navbar
// const openNavBar = function () {
//   navBar.classList.add("active");
//   navBarBtn.classList.add("active");
// };
// navBarBtn.addEventListener("click", openNavBar);

