// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setSizeChoice } from "./TransientState.js"

const handleSizeChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value))
    }
}

    document.querySelector("#container").addEventListener("change", handleSizeChoice)

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()


    let sizeOptionsHTML = ""
    sizes.forEach(size => {
        sizeOptionsHTML += `<div>
            <input type='radio' name='size' value='${size.id}' /> ${size.carets}
        </div>`
    })

    return sizeOptionsHTML
}