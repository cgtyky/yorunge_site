const btn = document.querySelector("button.hidden-menu-btn");
const menu = document.querySelector(".hidden-menu");
const topMenu = document.querySelector(".topmenu");
const body = document.body;
const logo = document.querySelector(".logo-to-be-hidden");
var topFirst = true;

function stickyFunc() {
  if (window.scrollY > 50) {
    logo.classList.add("opacity-0");
    logo.classList.remove("opacity-100");
  } else {
    logo.classList.add("opacity-100");
    logo.classList.remove("opacity-0");
  }
}

// function topTextAnimate() {
//   if (window.scrollY < 400 && topFirst) {

//   }
// }

window.addEventListener("scroll", stickyFunc);

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
  topMenu.classList.toggle("bg-white");
});

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
