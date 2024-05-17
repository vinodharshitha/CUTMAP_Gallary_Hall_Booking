document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;

    // Send email address to server for processing
    fetch("forgot.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").textContent = data.message;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
