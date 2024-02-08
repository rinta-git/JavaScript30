let player = document.querySelector(".player");
let video = player.querySelector(".viewer");
let toggle = player.querySelector(".toggle");
let progress = player.querySelector(".progress");
let progressFilled = player.querySelector(".progress__filled");
let range = player.querySelectorAll(".player__slider");
let skips = player.querySelectorAll("[data-skip]");

//function handlers
function togglePlay() {
  let method = video.paused ? "play" : "pause";
  method === "play" ? video.play() : video.pause();
}
function updatePlayButton() {
  const icon = this.paused ? "►" : "| |";
  toggle.textContent = icon;
}
function updateRange() {
  video[this.name] = this.value;
}
function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }
//hook into the events
video.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
toggle.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgressBar);

range.forEach((slider) => slider.addEventListener("change", updateRange));
range.forEach((slider) => slider.addEventListener("mousemove", updateRange));
skips.forEach((skip) => skip.addEventListener("click", handleSkip));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);