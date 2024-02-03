const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");
context.strokeStyle = "#BADA55"; //base color
context.lineJoin = "round"; //a shape while joining two lines
context.lineCap = "round"; //a shape of the starting line point
context.lineWidth = 50;
//starting points to draw
let x = 0;
let y = 0;
let isDrawing = false;
let hue = 0;
let direction = true;
function draw(e) {
  if (!isDrawing) return; //stop running if mouse is not clicked
  context.strokeStyle = `hsl(${hue},100%,50%)`; //adding color to line refer:https://mothereffinghsl.com/
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [x, y] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (context.lineWidth >= 50 || context.lineWidth <= 1) {
    direction = !direction;
  }
  direction ? context.lineWidth++ : context.lineWidth--; //change the width of the line
}
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [x, y] = [e.offsetX, e.offsetY]; //updating to start from where the mouse is clicked
});
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
