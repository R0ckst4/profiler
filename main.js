const videoContainer = document.querySelector(".intro-video-container");
const video = videoContainer.querySelector(".intro");
const skipButton = videoContainer.querySelector("#skip-intro-button");
const replayButton = document.querySelector("#replay-intro-button");
const scrollDownWrapper = document.querySelector("#scroll-down-wrapper");

document.body.onload = function () {
  setTimeout(function () {
    const preloader = document.getElementById("page-preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 10000);
};

function showScrollDown() {
  scrollDownWrapper.style.display = "none";
  setTimeout(function () {
    scrollDownWrapper.classList.add("show");
    scrollDownWrapper.style.display = "block";
  }, 3000);
}
function disableScroll(event) {
  event.preventDefault();
}
function enableScroll() {
  window.removeEventListener("wheel", disableScroll);
  window.addEventListener("wheel", enableScroll, { passive: false });
}
video.addEventListener("ended", function () {
  video.pause();
  videoContainer.style.display = "none";
  window.removeEventListener("wheel", disableScroll);
  showScrollDown();
});

skipButton.addEventListener("click", function () {
  video.pause();
  videoContainer.style.display = "none";
  window.removeEventListener("wheel", disableScroll);
  enableScroll();
  showScrollDown();
});

replayButton.addEventListener("click", function () {
  video.currentTime = 0;
  video.play();
  videoContainer.style.display = "block";
  window.addEventListener("wheel", disableScroll, { passive: false });
  scrollDownWrapper.style.display = "none";
});

video.addEventListener("play", function () {
  window.addEventListener("wheel", disableScroll, { passive: false });
});

video.addEventListener("ended", function () {
  videoContainer.style.display = "none";
  window.removeEventListener("wheel", disableScroll);
  window.addEventListener("wheel", enableScroll, { passive: false });
  showScrollDown();
});

const overlay = document.querySelector(".overlay");
const expBtn = document.querySelector("#exp-btn");

expBtn.addEventListener("click", () => {
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }
});

document.querySelector("#up-btn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#me-btn").addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
