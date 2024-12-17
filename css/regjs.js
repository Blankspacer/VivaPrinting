// JavaScript Document
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic Validation
    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulating email activation process
    // In a real scenario, here we would send data to the backend (e.g., via AJAX) 
    // and the server would send an actual email with the activation link.

    // Show confirmation message
    document.getElementById('message').innerHTML = `
        <p>Registration successful!</p>
        <p>An activation email has been sent to <strong>${email}</strong>. Please check your inbox and click the activation link to activate your account.</p>
    `;
    
    // You could also send an email here through an API like SendGrid, NodeMailer, etc., 
    // but for the frontend, it's a simulation:
    simulateEmailSending(email);
});

function simulateEmailSending(email) {
    console.log(`Activation email sent to: ${email}`);
    // Simulate an activation link, would be part of real backend implementation
    console.log('Activation Link: http:/https://www.vivasmartprinting.com/activate?token=exampletoken');
}
