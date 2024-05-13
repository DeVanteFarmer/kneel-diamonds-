// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setStyleChoice } from "./TransientState.js"

const handleStyleChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}

document.querySelector("#container").addEventListener("change", handleStyleChoice)


export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

   
    let styleOptionsHTML = ""
    styles.forEach(style => {
        styleOptionsHTML += `<div>
            <input type='radio' name='style' value='${style.id}' /> ${style.style}
        </div>`
    })

    return styleOptionsHTML
}