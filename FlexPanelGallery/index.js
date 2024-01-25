const panels = document.querySelectorAll(".panel");
function toggleOpen() {
  this.classList.toggle("open");
}

function toggleOpenActive(e) {
  console.log(e.propertyName);
  if (e.propertyName == "flex-grow") this.classList.toggle("open-active");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleOpenActive)
);
