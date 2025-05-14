// Countdown timer
let duration = 300; // 5 minutes in seconds
const timerDisplay = document.getElementById("timer");

function updateTimer() {
  const minutes = String(Math.floor(duration / 60)).padStart(2, '0');
  const seconds = String(duration % 60).padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
  if (duration > 0) {
    duration--;
    setTimeout(updateTimer, 1000);
  }
}

updateTimer();

// Auto move focus between inputs
const inputs = document.querySelectorAll(".otp-inputs input");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
