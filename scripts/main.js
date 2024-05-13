import { MetalOptions } from "./MetalOptions.js"
import { PlaceOrder } from "./PlaceOrder.js";
import { SizeOptions } from "./SizeOptions.js"
import { StyleOptions } from "./StyleOptions.js"
import { PlaceOrder } from "./Orders.js";

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions();
    const sizeOptionsHTML = await SizeOptions();
    const styleOptionsHTML = await StyleOptions();
    const orderButtonHTML = PlaceOrder();
    const customOrderHTML = await PlaceOrder();  // Fetch and display orders

    const composedHTML = `
        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>
        <article class="order">
            ${orderButtonHTML}
        </article>
        <article id="ordersContainer">
            <h2>Custom Jewelry Orders</h2>
            <!-- Orders will be displayed here -->
        </article>

    `;

    container.innerHTML = composedHTML;
};


const initializeEventListeners = () => {
    document.addEventListener("selectionChanged", e => {
        console.log("State of data has changed. Regenerating HTML...");
        render();
    });
};

initializeEventListeners();
render();
