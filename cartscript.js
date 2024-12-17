// JavaScript Document
// Product catalog with categories, subcategories, and pricing details
 const products = [
    {
        category: 'Booklets',
        subcategories: [
        
			
			 { name: 'Saddle Stitch Booklets', type: 'saddleStitchBooklets', basePrice: 89, quantity:0, totalPrice: 0 },
			{ name: 'paperback books', type: 'paperback books', basePrice: 150, quantity: 0, totalPrice: 0 },
			{ name: 'Spiral coil booklets', type: 'Spiral coil booklets', basePrice: 150, quantity: 0, totalPrice: 0 },
			
			{ name: 'Wire coil booklets', type: 'Wire coil booklets', basePrice: 150, quantity: 0, totalPrice: 0 },
			
			    { name: 'Note books', type: 'Note books', basePrice: 150, quantity: 0, totalPrice: 0 },
			
			{ name: 'Magazins', type: 'Magazigns', basePrice: 150, quantity: 0, totalPrice: 0 },
			
				{ name: 'Foil Perfect Bound Booklets', type: 'Foil Perfect Bound Booklets', basePrice: 26, quantity: 0, totalPrice: 0 },
			
			
            { name: 'Perfect Bound Booklets', type: 'perfectBoundBooklets', basePrice: 150, quantity: 0, totalPrice: 0 }
        ]
    },
	
	
//advertising essetial starts:
	
	
    {
        category: 'Advertising Essentials',
        subcategories: [
            { name: 'Flyers', type: 'flyers', basePrice: 50, quantity: 0, totalPrice: 0 },
			{ name: 'Catalog', type: 'Catalog', basePrice: 50, quantity: 0, totalPrice: 0 },
			{ name: 'collated printing', type: 'collated printing', basePrice: 50, quantity: 0, totalPrice: 0 },
			{ name: 'Door Hangers', type: 'Door Hangers', basePrice: 50, quantity: 0, totalPrice: 0 },
			{ name: 'Rack Cards', type: 'Rack Cards', basePrice: 50, quantity: 0, totalPrice: 0 },
			{ name: 'Small posters', type: 'Small posters', basePrice: 50, quantity: 0, totalPrice: 0 },
			{ name: 'Table tents', type: 'Table tents', basePrice: 50, quantity: 0, totalPrice: 0 },
            { name: 'Posters', type: 'posters', basePrice: 70, quantity: 0, totalPrice: 0 }
        ]
    },
	
	     {
        category: 'Business Cards',
        subcategories: [
            { name: 'Business Cards', type: 'Business Cards', basePrice: 20, quantity: 0, totalPrice: 0 },
            { name: 'Plastic Magnet Cards', type: 'Plastic Magnet Cards', basePrice: 70, quantity: 0, totalPrice: 0 }
        ]
    },
	
	      {
        category: 'Cards & Invitations',
        subcategories: [
            { name: 'Single Business Cards', type: 'Single Business Cards', basePrice: 50, quantity: 0, totalPrice: 0 },
			{ name: 'Note Cards', type: 'Note Cards', basePrice: 50, quantity: 0, totalPrice: 0 },
			{ name: 'Post Cards', type: 'Post Cards', basePrice: 50, quantity: 0, totalPrice: 0 },
            { name: 'Invitation Cards', type: 'Invitation Cards', basePrice: 70, quantity: 0, totalPrice: 0 }
        ]
    },
	
	
	{
        category: 'Business Essentials',
        subcategories: [
            { name: 'Custom Product Box', type: 'Custom Product Box', basePrice: 50, quantity: 0, totalPrice: 0 },
			
			{ name: 'Envelop', type: 'Envelop', basePrice: 50, quantity: 0, totalPrice: 0 },
            { name: 'Letter Head', type: 'Letter Head', basePrice: 70, quantity: 0, totalPrice: 0 }
        ]
    },
	
	{
        category: 'Signs-Banners-Display',
        subcategories: [
            { name: 'X-xstands', type: 'X-Stands', basePrice: 50, quantity: 0, totalPrice: 0 },
            { name: 'Signs', type: 'Signs', basePrice: 70, quantity: 0, totalPrice: 0 }
        ]
    },
	
	
	
	
	{
        category: 'Brouchers',
        subcategories: [
            { name: 'Brochures', type: 'Brochures', basePrice: 50, quantity: 0, totalPrice: 0 },
			 { name: 'Brochures High Quality', type: 'Brochures High Quality', basePrice: 50, quantity: 0, totalPrice: 0 },
			 { name: 'Foil Brochures', type: 'Foil Brochures', basePrice: 50, quantity: 0, totalPrice: 0 },
			 { name: 'Pamphlets', type: 'Pamphlets', basePrice: 50, quantity: 0, totalPrice: 0 },
				 { name: 'Cupon', type: 'Cupon', basePrice: 50, quantity: 0, totalPrice: 0 },
				 { name: 'Gate Psoters', type: 'Gate Posters', basePrice: 50, quantity: 0, totalPrice: 0 },
            { name: 'Posters', type: 'posters', basePrice: 70, quantity: 0, totalPrice: 0 }
        ]
    }
	
	
	 
];

// Cart array to store selected products
let cart = [];

// Function to display products in the HTML
function displayProducts() {
    const productList = document.getElementById('productList');

    products.forEach((category, categoryIndex) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        category.subcategories.forEach((product, subcategoryIndex) => {
            const subcategoryDiv = document.createElement('div');
            subcategoryDiv.classList.add('subcategory');

            subcategoryDiv.innerHTML = `
                <span>${product.name} (${product.type}) - $${product.basePrice}</span>
                <input type="number" min="0" placeholder="Qty" onchange="updateQuantity(${categoryIndex}, ${subcategoryIndex}, this.value)">
                <button onclick="addToCart(${categoryIndex}, ${subcategoryIndex})">Add to Cart</button>
                <span class="total-price" id="total-${categoryIndex}-${subcategoryIndex}">Total: $0</span>
            `;

            categoryDiv.appendChild(subcategoryDiv);
        });

        productList.appendChild(categoryDiv);
    });
}

// Update quantity and calculate total price
function updateQuantity(categoryIndex, subcategoryIndex, quantity) {
    const product = products[categoryIndex].subcategories[subcategoryIndex];
    product.quantity = parseInt(quantity) || 0;
    product.totalPrice = product.basePrice * product.quantity;

    const totalSpan = document.getElementById(`total-${categoryIndex}-${subcategoryIndex}`);
    totalSpan.textContent = `Total: $${product.totalPrice}`;
}

// Add product to cart
function addToCart(categoryIndex, subcategoryIndex) {
    const product = products[categoryIndex].subcategories[subcategoryIndex];
    if (product.quantity > 0) {
        const cartItem = { ...product };
        cart.push(cartItem);
        alert(`${product.name} added to cart!`);
    } else {
        alert('Please enter a valid quantity.');
    }
}

// View cart modal
function viewCart() {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - Qty: ${item.quantity} - Total: $${item.totalPrice}`;
        cartItems.appendChild(itemDiv);
        total += item.totalPrice;
    });

    cartTotal.textContent = `Total: $${total}`;
    cartModal.style.display = 'flex';
}

// Close cart modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Checkout function
function checkout() {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        closeCart();
    } else {
        alert('Your cart is empty.');
    }
}

// Initialize the product display
document.addEventListener('DOMContentLoaded', displayProducts);
