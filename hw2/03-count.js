const input = document.getElementById("userInput");
const textContainer = document.getElementById("textContainer");
const originalText = textContainer.textContent;

input.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {
  setTimeout(() => {
    const query = input.value.trim();

    if (!query) {
      textContainer.innerHTML = originalText;
      return;
    }

    // Split text into words while keeping punctuation
    const words = originalText.split(/(\W+)/);

    const highlightedWords = words.map((word) => {
      // Compare lowercase whole words only
      return word.toLowerCase() === query.toLowerCase()
        ? `<mark>${word}</mark>`
        : word;
    });

    textContainer.innerHTML = highlightedWords.join("");
  }, 0);
}
