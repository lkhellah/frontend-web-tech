// Grab the input box and the area we’ll display messages in
const elem = document.querySelector("input");
const resultDiv = document.querySelector("div:last-of-type div");

// Listen for when the user types something
elem.addEventListener("input", handleInput);

function handleInput(event) {
  const value = event.target.value.trim();

  // clear previous message
  resultDiv.textContent = "";

  // check for empty input
  if (value === "") return;

  // convert to number and validate
  const num = Number(value);

  if (isNaN(num)) {
    resultDiv.textContent = "Please enter a valid number.";
    resultDiv.className = "text-danger";
    return;
  }

  if (num < 0) {
    resultDiv.textContent = "Please enter a positive number.";
    resultDiv.className = "text-danger";
    return;
  }

  // convrert to string for palindrome check
  const str = value;
  const reversed = str.split("").reverse().join("");

  if (str === reversed) {
    resultDiv.textContent = "Yes, this number is a palindrome!";
    resultDiv.className = "text-success";
  } else {
    resultDiv.textContent = "No, this number is not a palindrome.";
    resultDiv.className = "text-danger";
  }
}
