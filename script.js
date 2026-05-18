const subscribeButtons = document.querySelectorAll(".subscribe-button");

subscribeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Thank you for subscribing.");

    });

});

const addCartButtons = document.querySelectorAll(".add-cart-button");

addCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName = button.dataset.name;

        const productPrice = button.dataset.price;

        let cart = [];

        const existingCart = sessionStorage.getItem("cart");

        if (existingCart) {

            cart = JSON.parse(existingCart);

        }

        cart.push({

            name: productName,

            price: productPrice

        });

        sessionStorage.setItem("cart", JSON.stringify(cart));

        alert("Item added to the cart.");

    });

});

const clearCartButton = document.getElementById("clear-cart-button");

if (clearCartButton) {

    clearCartButton.addEventListener("click", function() {

        sessionStorage.removeItem("cart");

        alert("Cart cleared.");

    });

}

const processOrderButton = document.getElementById("process-order-button");

if (processOrderButton) {

    processOrderButton.addEventListener("click", function() {

        const cart = sessionStorage.getItem("cart");

        if (cart) {

            sessionStorage.removeItem("cart");

            alert("Thank you for your order.");

        } else {

            alert("Your cart is empty. Please add items before processing an order.");

        }

    });

}

const viewCartButton = document.getElementById("view-cart-button");

if (viewCartButton) {

    viewCartButton.addEventListener("click", function() {

        const cart = sessionStorage.getItem("cart");

        if (cart) {

            const parsedCart = JSON.parse(cart);

            let cartMessage = "Cart Items:\n\n";

            parsedCart.forEach(function(item) {

                cartMessage += item.name + " - $" + item.price + "\n";

            });

            alert(cartMessage);

        } else {

            alert("Your cart is empty.");

        }

    });

}

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const customerName = document.getElementById("name").value;

        const customerEmail = document.getElementById("email").value;

        const orderItem = document.getElementById("item").value;

        const orderDetails = document.getElementById("details").value;

        const customOrder = {

            name: customerName,

            email: customerEmail,

            item: orderItem,

            details: orderDetails

        };

        localStorage.setItem("customOrder", JSON.stringify(customOrder));

        alert("Thank you for your message.");

    });

}