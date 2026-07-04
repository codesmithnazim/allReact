/**
 * Navigates the user to the previous page in their session history.
 */
function GoBack() {
  window.history.back();
}

/**
 * Initializes the random message feature.
 */
function initRandomMessage() {
  const messages = [
    "Houston, we have a problem. This page is lost in a black hole.",
    "Looks like you've taken a wrong turn at the last nebula.",
    "Are you sure you typed the right coordinates? The universe is a big place.",
    "This page has been abducted by aliens. We're negotiating its return.",
    "Even our supercomputers couldn't find this page in this galaxy.",
  ];
  const messageElement = document.getElementById("error-message");
  if (messageElement) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
  }
}

/**
 * Initializes the countdown redirect feature.
 */
function initCountdownRedirect() {
  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) return;

  let timeLeft = parseInt(countdownElement.textContent, 10);

  const redirectTimer = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft.toString();

    if (timeLeft <= 0) {
      clearInterval(redirectTimer);
      window.location.href = "https://charan-react-portfolio.vercel.app";
    }
  }, 1000);
}

/**
 * Initializes the mouse follower animation.
 */
function initMouseFollower() {
  const follower = document.querySelector(".mouse-follower");
  if (follower) {
    document.addEventListener("mousemove", (e) => {
      // We use transform for better performance
      follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }
}

/**
 * Initializes the dark/light mode theme toggle.
 */
function initThemeToggle() {
  const themeToggleButton = document.getElementById("theme-toggle");
  if (!themeToggleButton) return;

  // Apply saved theme on load
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggleButton.textContent = "🌙";
  }

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    let theme = "dark";
    if (document.body.classList.contains("light-mode")) {
      theme = "light";
      themeToggleButton.textContent = "🌙";
    } else {
      themeToggleButton.textContent = "☀️";
    }
    localStorage.setItem("theme", theme);
  });
}

// --- Initialize all features on page load ---
document.addEventListener("DOMContentLoaded", () => {
  initRandomMessage();
  initCountdownRedirect();
  initMouseFollower();
  initThemeToggle();
});


export {initRandomMessage,initCountdownRedirect,initMouseFollower,initThemeToggle,GoBack}