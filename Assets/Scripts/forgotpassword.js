document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forgot-password-form');
    const mainContent = document.querySelector('.main-content');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the normal submit
  
      const emailInput = document.getElementById('email');
      const email = emailInput.value.trim();
  
      if (!validateEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }
  
      // If email is valid, show a success message
      showMessage(`A password reset link has been sent to ${email}`, 'success');
      form.reset(); // Reset the form
    });
  
    // Function to show messages dynamically
    function showMessage(message, type) {
      // Remove any existing message
      const oldMessage = document.querySelector('.form-message');
      if (oldMessage) oldMessage.remove();
  
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('form-message', type);
      messageDiv.textContent = message;
  
      // Insert the message right after the form
      form.parentNode.insertBefore(messageDiv, form.nextSibling);
    }
  
    // Simple email validation
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  