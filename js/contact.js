const form = document.getElementById('contactForm');
const success = document.getElementById('success');

// ✅ Hide success message whenever the page loads or refreshes
window.addEventListener('DOMContentLoaded', () => {
  success.hidden = true;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const fields = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  };

  // Clear previous messages
  document.querySelectorAll('small').forEach((s) => (s.textContent = ''));

  // Full name validation
  if (!fields.name) {
    valid = false;
    document.getElementById('error-name').textContent = 'Full name is required.';
  }

  // Email validation
  if (!fields.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    valid = false;
    document.getElementById('error-email').textContent = 'Enter a valid email (name@example.com).';
  }

  // Subject validation
  if (!fields.subject) {
    valid = false;
    document.getElementById('error-subject').textContent = 'Subject is required.';
  }

  // Message validation
  if (fields.message.length < 10) {
    valid = false;
    document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
  }

  // ✅ Show success message only if all fields are valid
  if (valid) {
    success.hidden = false;
    form.reset();
  } else {
    success.hidden = true;
  }
});
