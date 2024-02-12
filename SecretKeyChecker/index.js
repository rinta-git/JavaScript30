let pressedKeys = [];
let secretCode = "hello";
window.addEventListener("keyup", (e) => {
  pressedKeys.push(e.key);
  pressedKeys.splice(
    -secretCode.length,
    pressedKeys.length - secretCode.length
  );
  if (pressedKeys.join("") === secretCode) cornify_add();
  console.log(pressedKeys)
});
