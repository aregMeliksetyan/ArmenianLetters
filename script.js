
const fallingLetterElement = document.getElementById('falling-letter');
const userInput = document.getElementById('user-input');

let currentLetter = generateRandomLetter();
fallingLetterElement.innerText = currentLetter;

// Generate a random letter (A-Z)
function generateRandomLetter() {
  const alphabet = 'աբգդեզէ';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Check if typed letter matches the falling letter
userInput.addEventListener('input', function() {
  const typedLetter = userInput.value.toLowerCase();
  if (typedLetter === currentLetter) {
    userInput.value = ''; // Clear the input
    currentLetter = generateRandomLetter(); // Generate a new falling letter
    fallingLetterElement.innerText = currentLetter;
  }
});
