const panels = document.querySelectorAll(".panel");

//add event listener to each panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClases();
    panel.classList.add("active");
  });
});

function removeActiveClases() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
