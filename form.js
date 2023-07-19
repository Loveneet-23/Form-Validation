const form = document.getElementById('myForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessages = {
  fullNameError: document.getElementById('fullNameError'),
  emailError: document.getElementById('emailError'),
  phoneNumberError: document.getElementById('phoneNumberError'),
  passwordError: document.getElementById('passwordError'),
  confirmPasswordError: document.getElementById('confirmPasswordError'),
};

form.addEventListener('submit', validateForm);
fullNameInput.addEventListener('change', validateFullName);
emailInput.addEventListener('change', validateEmail);
phoneNumberInput.addEventListener('change', validatePhoneNumber);
passwordInput.addEventListener('change', validatePassword);
confirmPasswordInput.addEventListener('change', validateConfirmPassword);

function validateForm(event) {
  event.preventDefault();

  validateFullName();
  validateEmail();
  validatePhoneNumber();
  validatePassword();
  validateConfirmPassword();

  if (!hasErrors()) {
    form.submit();
  }
}

function validateFullName() {
  const fullName = fullNameInput.value;
  if (fullName.length < 5) {
    showError('fullNameError', 'Name must be at least 5 characters long');
  } else {
    clearError('fullNameError');
  }
}

function validateEmail() {
  const email = emailInput.value;
  if (!email.includes('@')) {
    showError('emailError', 'Enter a valid email address');
  } else {
    clearError('emailError');
  }
}

function validatePhoneNumber() {
  const phoneNumber = phoneNumberInput.value;
  if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
    showError('phoneNumberError', 'Enter a valid 10-digit phone number');
  } else {
    clearError('phoneNumberError');
  }
}

function validatePassword() {
  const password = passwordInput.value;
  const fullName = fullNameInput.value;
  if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
    showError('passwordError', 'Password is not strong');
  } else {
    clearError('passwordError');
  }
}

function validateConfirmPassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    showError('confirmPasswordError', 'Passwords do not match');
  } else {
    clearError('confirmPasswordError');
  }
}

function showError(errorElementId, errorMessage) {
  const errorElement = errorMessages[errorElementId];
  errorElement.textContent = errorMessage;
}

function clearError(errorElementId) {
  const errorElement = errorMessages[errorElementId];
  errorElement.textContent = '';
}

function hasErrors() {
  for (const errorElementId in errorMessages) {
    if (errorMessages[errorElementId].textContent !== '') {
      return true;
    }
  }
  return false;
}