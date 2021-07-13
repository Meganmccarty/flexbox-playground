const parentContainer = document.getElementById("flexbox-parent");
const buttons = document.querySelectorAll("button")
console.log(parent)
console.log(buttons)

buttons.forEach(button => button.addEventListener("click", (e) => handleClick(e)))

function handleClick(e) {
    console.log(`Button clicked: ${e.target.innerText}`)
    newArray = e.target.innerText.split(":")
    console.log(newArray);
    parentContainer.style[newArray[0]] = newArray[1];
}