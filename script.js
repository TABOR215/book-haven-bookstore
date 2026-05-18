const subscribeButtons = document.querySelectorAll(".subscribe-button");

subscribeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Thank you for subscribing.");

    });

});

const addCartButtons = document.querySelectorAll(".add-cart-button");

addCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Item added to the cart.");

    });

});

const clearCartButton = document.getElementById("clear-cart-button");

if (clearCartButton) {

    clearCartButton.addEventListener("click", function() {
    
        alert("Cart cleared.");

});

}

const processOrderButton = document.getElementById("process-order-button");

if (processOrderButton) {

processOrderButton.addEventListener("click", function() {

    alert("Thank you for your order.");

});

}

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for your message.");

    });

}