  function toggleVisibility(id) {
    const input = document.getElementById(id);
    const icon = event.currentTarget.querySelector("i");
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  }

  document.querySelector('.signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const termsChecked = document.getElementById('terms').checked;

  
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    if (!termsChecked) {
      alert('Please agree to the Terms and Privacy Policy.');
      return;
    }
  });

