document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const modalBody = document.getElementById("modalBody");
  const resultModal = new bootstrap.Modal(
    document.getElementById("resultModal")
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const status = document.getElementById("status").value;
    const comments = document.getElementById("comments").value.trim();

    // Collect selected courses
    const selectedCourses = Array.from(
      document.querySelectorAll(".form-check-input:checked")
    ).map((el) => el.value);

    modalBody.innerHTML = `
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Registration Status:</strong> ${status}</p>
        <p><strong>Courses Taken:</strong> ${
          selectedCourses.length ? selectedCourses.join(", ") : "None"
        }</p>
        <p><strong>Additional Comments:</strong> ${comments || "(none)"}</p>
      `;

    resultModal.show();
    form.reset();
  });
});
