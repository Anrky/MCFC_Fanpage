const menu_toggle = document.querySelector(".menu_toggle");
const nav = document.querySelector("nav");

menu_toggle.addEventListener("click", () => {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});

function myFunction(x) {
  if (x.matches) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

let x = window.matchMedia("(max-width: 800px)");
myFunction(x);
x.addListener(myFunction);
