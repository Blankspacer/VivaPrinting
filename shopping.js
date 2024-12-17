// JavaScript Document
// Simulate cart data
let cart = [
    { name: "Product 1", price: 20.0, quantity: 2 },
    { name: "Product 2", price: 15.0, quantity: 1 },
    { name: "Product 3", price: 30.0, quantity: 3 }
];

// Render cart items dynamically
function renderCart() {
    const cartTable = document.getElementById("cartTable").getElementsByTagName('tbody')[0];
    cartTable.innerHTML = ""; // Clear existing rows

    let total = 0;
    cart.forEach(item => {
        const row = cartTable.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeItem('${item.name}')">Remove</button></td>
        `;
        total += item.price * item.quantity;
    });

    // Update total price
    document.getElementById("cartTotal").innerText = `Total: $${total.toFixed(2)}`;
}

// Remove item from cart
function removeItem(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    renderCart();
}

// Show checkout form
function showCheckoutForm() {
    document.getElementById("checkoutForm").style.display = "block";
}

// Cancel checkout process
function cancelCheckout() {
    document.getElementById("checkoutForm").style.display = "none";
}

// Initialize the page with cart items
renderCart();
