import menuData from "./menu.json";
import templateMenu from "./templateMenu.hbs";
import "./styles.css";

const markup = templateMenu(menuData);
document.querySelector("ul.js-menu").insertAdjacentHTML("beforeend", markup);

// * ---------- SWITCHER ----------
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const checkBox = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body");

body.classList.add(Theme.LIGHT);

function darkThemeCheck() {
  if (localStorage.getItem("theme") === Theme.DARK) {
    checkBox.checked = true;
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
}
darkThemeCheck();

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
}

checkBox.addEventListener("change", shiftTheme);

function shiftTheme(event) {
  if (event.target.checked) {
    switchDarkThemeOn();
  } else {
    switchLightThemeOn();
  }
}
function switchLightThemeOn() {
  body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem("theme", Theme.LIGHT);
}
function switchDarkThemeOn() {
  body.classList.replace(Theme.LIGHT, Theme.DARK);
  localStorage.setItem("theme", Theme.DARK);
}
