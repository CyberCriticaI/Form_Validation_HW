////////////////////////////////////////////
// ALAB 316.4.1 - Form Validation Example //
////////////////////////////////////////////

const registrationForm = document.getElementById('registration');

registrationForm.addEventListener('submit', (event) => {
  // Stops the browser from automatically refreshing
  event.preventDefault();

  // Variables
  const userNameInput = document.querySelector('input[name="username"]');
  const userNamePattern = /^(?=(?:.*([a-zA-Z0-9]))(?:.*(?!\1)[a-zA-Z0-9]))[a-zA-Z0-9]{4,}$/;
  const errorDisplay = document.getElementById('errorDisplay');

  // Validate username input field
  if (userNamePattern.test(userNameInput.value)) {
    errorDisplay.style.display = 'none';
  } else {
    errorDisplay.style.display = 'block';
    const errorMessageList = generateMessageList([
      'The username cannot be blank',
      'The username must be at least four characters long',
      'The username must contain at least two unique characters',
      'The username cannot contain any special characters or whitespace'
    ])
    errorDisplay.appendChild(errorMessageList)
  }
})

// Helper function to create a list of error messages
function generateMessageList(errorMessageArr) {
  const ul = document.createElement('ul');
  for (let i = 0; i < errorMessageArr.length; i++) {
    const li = document.createElement('li');
    li.textContent = errorMessageArr[i];
    ul.appendChild(li);
  }
  return ul;
}

/*
  THERE IS NOT JUST ONE WAY TO SOLVE A PROBLEM. THERE ARE MANY. IF YOU DO NOT GO ON TO DO IT LIKE THIS,
  THAT IS FINE. IF YOU END UP CHANGING AROUND THE CODE TO SUIT YOUR NEEDS OR YOU STYLE, THAT IS FINE.
*/