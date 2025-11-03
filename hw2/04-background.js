// Wrap everything so it runs after page load
window.addEventListener("load", () => {
  const body = document.body;
  const intervalInput = document.getElementById("intervalInput");
  const toggleBtn = document.getElementById("toggleBtn");

  let interval = 3;
  let colorTimer = null;
  let isRunning = false;

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.5;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  function changeBackground() {
    body.style.backgroundColor = getRandomColor();
  }

  function startChanging() {
    colorTimer = setInterval(changeBackground, interval * 1000);
    toggleBtn.textContent = "Stop";
    toggleBtn.classList.remove("btn-success");
    toggleBtn.classList.add("btn-danger");
    intervalInput.disabled = true;
    isRunning = true;
  }

  function stopChanging() {
    clearInterval(colorTimer);
    toggleBtn.textContent = "Start";
    toggleBtn.classList.remove("btn-danger");
    toggleBtn.classList.add("btn-success");
    intervalInput.disabled = false;
    isRunning = false;
  }

  toggleBtn.addEventListener("click", () => {
    if (isRunning) {
      stopChanging();
    } else {
      const newVal = Number(intervalInput.value);
      if (newVal > 0) interval = newVal;
      startChanging();
    }
  });

  // Initial auto-start
  startChanging();
});
