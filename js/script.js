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
  const video = document.getElementById("video");
  const videoBox = document.getElementById("videoBox");
  const afterVideo = document.getElementById("afterVideo");
  const music = document.getElementById("bgMusic");

  // 🔇 ensure EVERYTHING is silent first
  

  video.classList.remove("hidden");
  video.play();

  video.onended = () => {

    video.style.transition = "1s ease";
    video.style.opacity = "0";

    setTimeout(() => {

      videoBox.style.display = "none";
      afterVideo.classList.remove("hidden");

      // 🎵 ONLY NOW music starts
      music.volume = 0.5;
      music.play().catch(() => {});

    }, 1000);
  };
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