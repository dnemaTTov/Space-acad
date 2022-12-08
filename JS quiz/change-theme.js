let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("change-theme");

  if (theme.getAttribute("href") == "../CSS Quiz/questions.css") {
    theme.href = "../CSS Quiz/light-theme-quiz.css";
    this.textContent = "Dark theme";
  } else {
    theme.href = "../CSS Quiz/questions.css";
    this.textContent = "Light theme";
  }
};
