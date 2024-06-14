
const fallingLetterElement = document.getElementById('falling-letter');
const userInput = document.getElementById('user-input');
const correctCounter = document.getElementById('correct-counter');
const wrongCounter = document.getElementById('wrong-counter');
const metricsElement = document.getElementById('metrics');
const timerElement = document.getElementById('timer');

let currentLetter = generateRandomLetter();
fallingLetterElement.innerText = currentLetter;
let correctCount = 0;
let wrongCount = 0;
let seconds = 0;
let timer;

// Generate a random letter (A-Z)
function generateRandomLetter() {
  const alphabet = 'աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքևօֆ';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Check if typed letter matches the falling letter
userInput.addEventListener('input', function() {
  const typedLetter = userInput.value.toLowerCase();
  if (typedLetter === currentLetter) {
    userInput.value = ''; // Clear the input
    correctCount++;
    correctCounter.innerText = `Ճիշտ: ${correctCount}`;
    currentLetter = generateRandomLetter(); // Generate a new falling letter
    fallingLetterElement.innerText = currentLetter;
  } else if (typedLetter.length === 1) {
    wrongCount++;
    wrongCounter.innerText = `Սխալ: ${wrongCount}`;
  }
});

// Timer
function startTimer() {
  timer = setInterval(function() {
    seconds++;
    timerElement.innerText = `Ժամանակ: ${seconds}`;
    updateMetrics();
  }, 1000);
}

startTimer();

// Update metrics in real time
function updateMetrics() {
  const timeElapsed = seconds === 0 ? 1 : seconds;
  const metrics = (correctCount - wrongCount) / timeElapsed;
  metricsElement.innerText = `(Ճիշտ-Սխալ)/Ժամանակ: ${metrics.toFixed(2)}`;
}
