
const ProductPrices = {
    "The Garden of Light": 30000,
    "Waves of Comfort": 25000,
    "Calm in His Assurance": 27500,
    "Al-Asr": 29000,
    "Radiant relief": 32000,
    "Hajj Special": 35000,
    "Spiritual guidance": 28000,
    "Noor on Black": 33000,
    "Abstract love": 24000,
    "Light of the Heavens": 36000,
};


let cart = [];


function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

function showPopup(ProductName, ProductPrice) {
    const popup = document.createElement("div");
    popup.className = "popup";

   
    popup.innerHTML = `
        <div class="popup-content">
            <h3>${ProductName}</h3>
            <p>Price: Rs. ${ProductPrice}</p>
            <button id="add-to-cart">Add to Cart</button>
            <button id="close-popup">Close</button>
        </div>
    `;

   
    popup.querySelector("#add-to-cart").addEventListener("click", () => {
        cart.push({ name: ProductName, price: ProductPrice });
        updateCartCount();
        document.body.removeChild(popup);
        alert(`${ProductName} added to cart!`);
    });

    
    popup.querySelector("#close-popup").addEventListener("click", () => {
        document.body.removeChild(popup);
    });

    document.body.appendChild(popup);
}

document.querySelectorAll(".Product").forEach(Product => {
    const ProductName = Product.querySelector("h3").textContent.trim();
    const ProductPrice = ProductPrices[ProductName];

    Product.addEventListener("click", () => {
        showPopup(ProductName, ProductPrice);
    });
});


const cartButton = document.createElement("div");
cartButton.className = "cart-button";
cartButton.innerHTML = `
    <button id="view-cart">Cart (<span id="cart-count">0</span>)</button>
`;
document.body.appendChild(cartButton);


cartButton.querySelector("#view-cart").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let cartDetails = "Your Cart:\n";
    let total = 0;
    cart.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.name} - Rs. ${item.price}\n`;
        total += item.price;
    });
    cartDetails += `\nTotal: Rs. ${total}`;
    alert(cartDetails);
});
