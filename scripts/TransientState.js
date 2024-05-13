// Set up the transient state data structure and provide initial valuess
const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
} 
// Functions to modify each property of transient state
export const setMetalChoice = (chosenMetalId) => {
    transientState.metalId = chosenMetalId
    console.log(transientState)
}

export const setSizeChoice = (chosenSizeId) => {
    transientState.sizeId = chosenSizeId
    console.log(transientState)

}

export const setStyleChoice = (chosenStyleId) => {
    transientState.styleId = chosenStyleId
    console.log(transientState)

}
// Function to convert transient state to permanent state
export const saveOrder = async () => {
    if (transientState.metalId && transientState.sizeId && transientState.styleId) {
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        };

        const response = await fetch("http://localhost:8088/orders", postOptions);
        if (response.ok) {
            const newOrder = await response.json();
            // Dispatch event with new order details
            document.dispatchEvent(new CustomEvent("orderCreated", { detail: newOrder }));
        }
    }
};
