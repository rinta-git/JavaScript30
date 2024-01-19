const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand")
function playTheClock() {
  const now = new Date();
  const second = now.getSeconds(); //current second
  const secondDegree = ((second / 60) * 360)+90; //second hand degree to be pointed 
  secHand.style.transform = `rotate(${secondDegree}deg)`;

  const mint = now.getMinutes();
  const mintDegree = ((mint / 60) * 360)+90;
  minHand.style.transform = `rotate(${mintDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360)+90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(playTheClock, 1000);
