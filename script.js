// Script.js
document.getElementById("editNewsForm").addEventListener("submit", function (e) {
    let isValid = true;

    const title = document.getElementById("title");
    const body = document.getElementById("body");
    const date = document.getElementById("date");

    const titleError = document.getElementById("titleError");
    const bodyError = document.getElementById("bodyError");
    const dateError = document.getElementById("dateError");

    // Title validation
    if (title.value.trim().length < 5) {
        titleError.textContent = "Title must be at least 5 characters long.";
        isValid = false;
    } else titleError.textContent = "";

    // Body validation
    if (body.value.trim() === "") {
        bodyError.textContent = "News content cannot be empty.";
        isValid = false;
    } else bodyError.textContent = "";

    // Date validation
    const today = new Date().toISOString().split("T")[0];
    if (date.value === "" || date.value < today) {
        dateError.textContent = "Publish date must be today or in the future.";
        isValid = false;
    } else dateError.textContent = "";

    if (!isValid) {
        e.preventDefault(); // Stop form submission if invalid
    }
});
