// JavaScript Document
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Check if CAPTCHA is solved
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Please complete the CAPTCHA.");
        return;
    }

    // If everything is good, submit the form
    this.submit();
});
