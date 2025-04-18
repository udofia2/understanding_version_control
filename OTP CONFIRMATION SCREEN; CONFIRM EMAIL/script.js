// OTP Auto-Focus
const inputs = document.querySelectorAll(".otp-inputs input");
inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (e.inputType === "insertText" && input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

// Countdown Timer
let countdown = 120;
const timerDisplay = document.getElementById("countdown");

function updateTimer() {
  const minutes = String(Math.floor(countdown / 60)).padStart(2, '0');
  const seconds = String(countdown % 60).padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}s`;

  if (countdown > 0) {
    countdown--;
    setTimeout(updateTimer, 1000);
  }
}
updateTimer();
