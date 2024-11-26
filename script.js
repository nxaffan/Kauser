document.addEventListener("DOMContentLoaded", function() {
    // Array of hobbies
    const hobbies = [
        "Photography - Capturing moments through the lens.",
        "Coding - Building web applications and solving problems.",
        "Reading - Exploring different worlds through books."
    ];

    // Select the hobby list element
    const hobbyList = document.getElementById("hobby-list");

    // Clear the existing list
    hobbyList.innerHTML = '';

    // Dynamically add hobbies
    hobbies.forEach(function(hobby) {
        let listItem = document.createElement("li");
        listItem.textContent = hobby;
        hobbyList.appendChild(listItem);
    });
});
