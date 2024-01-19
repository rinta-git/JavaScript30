const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand")

function playTheClock() {
  const now = new Date();

  const second = now.getSeconds(); //current second
  //(90 is for calculate the position corresponding to the default degree. Here, 90 is the default)
  const secondDegree = ((second / 60) * 360)+90; //second hand degree to be pointed 
  secHand.style.transform = `rotate(${secondDegree}deg)`;

  const mint = now.getMinutes(); //current minutes
  const mintDegree = ((mint / 60) * 360)+90; //mint hand degree to be pointed 
  minHand.style.transform = `rotate(${mintDegree}deg)`;

  const hour = now.getHours(); //current hour
  const hourDegree = ((hour / 12) * 360)+90; //hour hand degree to be pointed 
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(playTheClock, 1000);
