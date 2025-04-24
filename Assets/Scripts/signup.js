 // Toggle visibility
  function toggleVisibility(id) {
    const input = document.getElementById(id);
    const icon = input.parentElement.querySelector(".toggle i");

    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  }

  // Form validation
  document.querySelector(".signup-form").addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    let valid = true;

    // Clear previous error states
    document.querySelectorAll(".error-message").forEach(el => el.textContent = '');
    document.querySelectorAll(".input-group input").forEach(el => el.classList.remove("input-error"));

    // Name validation
    if (name.value.trim() === "") {
      showError(name, "Name is required");
      valid = false;
    }

    // Email validation
    if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      showError(email, "Enter a valid email");
      valid = false;
    }

    // Password length
    if (password.value.length !== 8) {
      showError(password, "Password must be exactly 8 characters");
      valid = false;
    }

    // Password match
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Passwords do not match");
      valid = false;
    }

    if (!valid) e.preventDefault();
  });

  function showError(input, message) {
    const group = input.closest(".input-group");
    const error = group.querySelector(".error-message");
    error.textContent = message;
    input.classList.add("input-error");
  }
