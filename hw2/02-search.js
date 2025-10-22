const input = document.getElementById("userInput");
const button = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("results");

button.addEventListener("click", handleSearch);

function handleSearch() {
  const query = input.value.trim().toLowerCase();
  resultsDiv.innerHTML = ""; // clear previous results

  if (!query) {
    resultsDiv.innerHTML = `<p class="text-danger">Please enter a name to search.</p>`;
    return;
  }

  // Filter characters whose names include the search term
  const matches = characters.filter((char) =>
    char.name.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsDiv.innerHTML = `<p class="text-danger">No characters found.</p>`;
    return;
  }

  // Create and show cards for each matching character
  matches.forEach((char) => {
    const highlightedName = char.name.replace(
      new RegExp(query, "gi"),
      (match) => `<mark>${match}</mark>`
    );

    const card = document.createElement("div");
    card.className = "card p-3 text-start";
    card.style.width = "16rem";

    card.innerHTML = `
      <h5 class="card-title fw-bold">${highlightedName}</h5>
      <p class="card-text mb-0">Birth year: ${char.birth_year}</p>
    `;

    resultsDiv.appendChild(card);
  });
}
