// Always start at top on refresh
history.scrollRestoration = "manual";
window.scrollTo(0, 0);

// Lock scroll initially
document.body.classList.add("lock-scroll");
function openInvitation() {
  document.getElementById("openScreen").style.display = "none";

  // Unlock scrolling
  document.body.classList.remove("lock-scroll");

  const invite = document.getElementById("invitation");
  invite.style.display = "block";
  invite.scrollIntoView({ behavior: "smooth" });

  // Show the duck
  const duck = document.getElementById("duck");
  duck.style.display = "block";
}

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Insert invitee name
window.addEventListener("DOMContentLoaded", () => {
  const name = getQueryParam("name");
  const firstScreen = document.getElementById("firstScreenName");
  if(name){
    const formattedName = decodeURIComponent(name).split(" ").map(
      w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    ).join(" ");
    firstScreen.textContent = `Dear ${formattedName},`;
  }

  // Always reset to first screen
  document.getElementById("openScreen").style.display = "flex";
  document.getElementById("invitation").style.display = "none";
});

// Wedding Countdown (13 February 2026)
const weddingDate = new Date("2026-02-13T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "<h3>🎉 Today is the Wedding Day! 🎉</h3>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

