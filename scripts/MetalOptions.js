// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setMetalChoice } from "./TransientState.js"

const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}

 document.querySelector("#container").addEventListener("change", handleMetalChoice)

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

   

    let metalOptionsHTML = ""
    metals.forEach(metal => {
        metalOptionsHTML += `<div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`
    })

    return metalOptionsHTML
}

