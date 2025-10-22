const input = document.getElementById("userInput");
const textContainer = document.getElementById("textContainer");
const originalText = textContainer.textContent; // store original text

input.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {
  // Delay the highlight until after the keypress
  setTimeout(() => {
    const query = input.value.trim();

    if (!query) {
      textContainer.innerHTML = originalText; // reset text if empty
      return;
    }

    // Highlight all occurrences (case-insensitive)
    const regex = new RegExp(`(${query})`, "gi");
    const highlighted = originalText.replace(regex, "<mark>$1</mark>");

    textContainer.innerHTML = highlighted;
  }, 0);
}
