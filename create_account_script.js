// password confirmation logic
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("create-account-form");
    form.addEventListener("submit", function(event) {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            event.preventDefault();
        }
    });
});
