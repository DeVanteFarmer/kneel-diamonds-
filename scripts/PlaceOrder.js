export const PlaceOrder = () => {
    const buttonHTML = `<button id='orderButton'>Create Custom Order</button>`;

    // This code will run after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
        const orderButton = document.getElementById('orderButton');
        if (orderButton) {
            orderButton.addEventListener("click", saveOrder);
        }
    });

    return buttonHTML;
};

    

