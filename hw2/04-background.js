// Select elements
const body = document.body;
const intervalInput = document.getElementById("intervalInput");
const toggleBtn = document.getElementById("toggleBtn");

let interval = 3; // default seconds
let colorTimer = null;
let isRunning = true;

// Function to generate a random rgba color (soft alpha)
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = 0.5; // dim the alpha
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Function to change background
function changeBackground() {
  body.style.backgroundColor = getRandomColor();
}

// Start color changes
function startChanging() {
  colorTimer = setInterval(changeBackground, interval * 1000);
  toggleBtn.textContent = "Stop";
  toggleBtn.classList.replace("btn-success", "btn-danger");
  isRunning = true;
}

// Stop color changes
function stopChanging() {
  clearInterval(colorTimer);
  toggleBtn.textContent = "Start";
  toggleBtn.classList.replace("btn-danger", "btn-success");
  isRunning = false;
}

// Event listener for button
toggleBtn.addEventListener("click", () => {
  if (isRunning) {
    stopChanging();
  } else {
    const newVal = Number(intervalInput.value);
    if (newVal > 0) interval = newVal;
    startChanging();
  }
});

// Initial start
startChanging();
