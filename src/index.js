import "./style/css/style.css";
import "./style/sass/main.scss";

const tooltip = document.createElement("span");
tooltip.innerText = "Hello, it's JS here" + (navigator.onLine ? ", refresh page to change image!" : "!");
tooltip.className = "js-text"
document.body.appendChild(tooltip)
console.log("Welcome")