let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("change-theme");

  if (theme.getAttribute("href") == "./CSS/theme-light.css") {
    theme.href = "./CSS/theme-dark.css";
    this.textContent = "Light theme";
  } else {
    theme.href = "./CSS/theme-light.css";
    this.textContent = "Dark theme";
  }
};
let switchMode_ = document.getElementById("switchMode_");

switchMode_.onclick = function () {
  let theme = document.getElementById("change-theme");

  if (theme.getAttribute("href") == "./CSS/theme-light.css") {
    theme.href = "./CSS/theme-dark.css";
    this.textContent = "Light theme";
  } else {
    theme.href = "./CSS/theme-light.css";
    this.textContent = "Dark theme";
  }
};
// document.getElementById("switchMode").onclick = function () {
//   this.textContent = "Light theme";
// };
