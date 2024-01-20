const inputs = document.querySelectorAll("input"); //returns a nodelist
function handleUpdate() {
  const suffix = this.dataset.sizing || ""; //returns data attributes
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
