// JavaScript Document
// Product catalog with categories, subcategories, and pricing details
const products = [
    {
        category: 'Booklets',
        subcategories: [
            { name: 'Saddle Stitch Booklets', type: 'saddleStitchBooklets', basePrice: 100, quantity: 0, totalPrice: 0 },
            { name: 'Perfect Bound Booklets', type: 'perfectBoundBooklets', basePrice: 150, quantity: 0, totalPrice: 0 },
            { name: 'Wire-O Booklets', type: 'wireOBoundBooklets', basePrice: 120, quantity: 0, totalPrice: 0 }
        ]
    },
    {
        category: 'Advertising Essentials',
        subcategories: [
            { name: 'Flyers', type: 'flyers', basePrice: 50, quantity: 0, totalPrice: 0 },
            { name: 'Posters', type: 'posters', basePrice: 70, quantity: 0, totalPrice: 0 },
            { name: 'Stickers', type: 'stickers', basePrice: 30, quantity: 0, totalPrice: 0 }
        ]
    },
    {
        category: 'Brochures',
        subcategories: [
            { name: 'Tri-Fold Brochures', type: 'triFoldBrochures', basePrice: 200, quantity: 0, totalPrice: 0 },
            { name: 'Bi-Fold Brochures', type: 'biFoldBrochures', basePrice: 180, quantity: 0, totalPrice: 0 },
            { name: 'Z-Fold Brochures', type: 'zFoldBrochures', basePrice: 220, quantity: 0, totalPrice: 0 }
        ]
    },
    {
        category: 'Business Cards',
        subcategories: [
            { name: 'Standard Business Cards', type: 'standardBusinessCards', basePrice: 300, quantity: 0, totalPrice: 0 },
            { name: 'Premium Business Cards', type: 'premiumBusinessCards', basePrice: 350, quantity: 0, totalPrice: 0 },
            { name: 'Metallic Business Cards', type: 'metallicBusinessCards', basePrice: 400, quantity: 0, totalPrice: 0 }
        ]
    },
    {
        category: 'Cards and Invitations',
        subcategories: [
            { name: 'Birthday Invitations', type: 'birthdayInvitations', basePrice: 400, quantity: 0, totalPrice: 0 },
            { name: 'Wedding Invitations', type: 'weddingInvitations', basePrice: 450, quantity: 0, totalPrice: 0 },
            { name: 'Holiday Cards', type: 'holidayCards', basePrice: 380, quantity: 0, totalPrice: 0 }
        ]
    }
];

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
                <span class="total-price" id="total-${categoryIndex}-${subcategoryIndex}">Total: $0</span>
            `;

            categoryDiv.appendChild(subcategoryDiv);
        });

        productList.appendChild(categoryDiv);
    });
}

// Function to update quantity and calculate total price
function updateQuantity(categoryIndex, subcategoryIndex, quantity) {
    const product = products[categoryIndex].subcategories[subcategoryIndex];
    product.quantity = parseInt(quantity) || 0;
    product.totalPrice = product.basePrice * product.quantity;

    // Update the total price display
    const totalSpan = document.getElementById(`total-${categoryIndex}-${subcategoryIndex}`);
    totalSpan.textContent = `Total: $${product.totalPrice}`;
}

// Initialize the product display
document.addEventListener('DOMContentLoaded', displayProducts);
