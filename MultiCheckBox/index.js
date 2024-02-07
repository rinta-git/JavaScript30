const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function handleCheckboxes(e) {
  let mutilpleSelection = false;
  //check shiftkey pressed for multi selection
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      //check current selection is from top or bottom
      if (checkbox === this || lastChecked === checkbox) {  
        mutilpleSelection = !mutilpleSelection;
      }
      //check all the in between checkboxes
      if (mutilpleSelection) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheckboxes)
);
