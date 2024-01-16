function playAudio(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0; //rewind to start playing. Otherwise it won't play if we press simultaneously since the audio is already playing
  audio.play();  
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //stop if there is no transform
  this.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playAudio);
