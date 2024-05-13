// export const Orders = async () => {
//     const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size");
//     const orders = await response.json();

//     const orderHTML = orders.map(singleOrder => {
//         const orderPrice = (singleOrder?.metal?.price || 0) + (singleOrder?.style?.price || 0) + (singleOrder?.size?.price || 0);
//         return `<div>
//             Order: $${orderPrice.toFixed(2)}
//         </div>`;
//     }).join("");

//     return orderHTML;
// }

// export const fetchOrders = async () => {
//     const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=size&_expand=style");
//     const orders = await response.json();

//     return orders.map(order => `
//         <div>
//             Order: Metal - ${order.metal?.price}, Size - ${order.size?.price}, Style - ${order.style?.price}
//         </div>
//     `).join("");
// };

document.addEventListener("orderCreated", async (event) => {
    const orderId = event.detail.id;
    const orderDetails = await fetch(`http://localhost:8088/orders/${orderId}?_expand=metal&_expand=size&_expand=style`);
    const order = await orderDetails.json();

    const totalCost = (order.metal.price + order.size.price + order.style.price).toFixed(2);
    const orderHTML = `
        <div>
            Order Number: ${orderId} <br>
            Total Cost: $${totalCost}
        </div>
    `;
    const ordersContainer = document.querySelector("#ordersContainer");
    if (ordersContainer) {
        ordersContainer.innerHTML += orderHTML;
    }
});

