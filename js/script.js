let msgIndex = 0;

const messages = [
  "Nur Qistina Sofiya…",
  "I don’t know how you’ll feel after this,",
  "but I just wanted to be honest with you ❤️",
  "You matter to me more than I usually say.",
  "And I will always wish you happiness.",
  "Even if life takes us different ways."
];

// -------------------
// START
// -------------------
function start() {
  document.getElementById("stage1").classList.add("hidden");
  document.getElementById("stage2").classList.remove("hidden");
}

// -------------------
// NAME CHECK
// -------------------
function checkName() {
  let name = document.getElementById("nameInput").value.toLowerCase();

  if (name.includes("nur qistina sofiya")) {

    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("stage3").classList.add("hidden");
      document.getElementById("stage4").classList.remove("hidden");

      startCinematic();

    }, 2000);

  } else {
    document.getElementById("error").innerText = "Try again… only her 💔";
  }
}

// -------------------
// VIDEO + MUSIC FLOW
// -------------------
function startCinematic() {
  const image = document.getElementById("mainImage");

  // fade in effect
  image.style.opacity = "0";
  setTimeout(() => {
    image.style.transition = "1s";
    image.style.opacity = "1";
  }, 500);
}

function imageClicked() {
  const herImageBox = document.getElementById("videoBox");
  const myImageBox = document.getElementById("myImageBox");
  const afterVideo = document.getElementById("afterVideo");

  // hide her image
  herImageBox.style.display = "none";

  // show your image
  myImageBox.classList.remove("hidden");

  // after a moment → continue
  setTimeout(() => {
    myImageBox.style.display = "none";
    afterVideo.classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play().catch(() => {});
  }, 2000);
}

// -------------------
// MOBILE AUTOPLAY FIX
// -------------------
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {});
}, { once: true });

// -------------------
// MESSAGE SYSTEM (FIXED)
// -------------------
function startMessages() {
  msgIndex = 0;

  document.getElementById("startMsgBtn").style.display = "none";
  document.getElementById("msgBox").classList.remove("hidden");
  document.getElementById("final").classList.add("hidden");

  document.getElementById("msgText").innerText = messages[msgIndex];
}

function nextMessage() {
  msgIndex++;

  if (msgIndex < messages.length) {
    document.getElementById("msgText").innerText = messages[msgIndex];
  } else {
    document.getElementById("msgBox").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
  }
}