const parentContainer = document.getElementById("flexbox-parent");
const buttons = document.querySelectorAll(".button-section button");
const addItem = document.querySelector("#add");
const removeItem = document.querySelector("#remove");
const codeContainer = document.getElementById("code-container")

buttons.forEach(button => button.addEventListener("click", (e) => changeStyle(e)));
addItem.addEventListener("click", (e) => createItem(e));
removeItem.addEventListener("click", (e) => deleteItem(e));

const parentContainerStyling = document.defaultView.getComputedStyle(parentContainer)
let flexDirection = parentContainerStyling.flexDirection;

function setStyling(property, value) {
    propertyElement = document.createElement("code");
    propertyElement.id = property
    if (codeContainer.querySelector(`#${property}`)) {
        codeContainer.removeChild(codeContainer.querySelector(`#${property}`));
    }
    switch (property) {
        case "flexDirection":
            propertyElement.innerHTML = `&nbsp;&nbsp;flex-direction: ${value};<br>`;
            break;
        case "flexWrap":
            propertyElement.innerHTML = `&nbsp;&nbsp;flex-wrap: ${value};<br>`
            break;
        case "justifyContent":
            propertyElement.innerHTML = `&nbsp;&nbsp;justify-content: ${value};<br>`
            break;
        case "alignItems":
            propertyElement.innerHTML = `&nbsp;&nbsp;align-items: ${value};<br>`
            break;
        case "alignContent":
            propertyElement.innerHTML = `&nbsp;&nbsp;align-content: ${value};<br>`
            break;
    }
    codeContainer.appendChild(propertyElement)
    Array.from(codeContainer.querySelectorAll("code"))
        .sort((a, b) => a.id.localeCompare(b.id))
        .forEach(code => codeContainer.appendChild(code))
}

function changeStyle(e) {
    e.target.parentNode.querySelectorAll("button").forEach(button => button.classList.remove("active"));
    e.target.className = "active";
    const propertyName = e.target.parentNode.querySelector("span").innerText;
    const value = e.target.innerText
    setStyling(propertyName, value)
    return parentContainer.style[propertyName] = value;
}

function createItem(e) {
    const newArray = parentContainer.querySelectorAll("div");
    const lastElement = newArray[newArray.length - 1];
    const lastElementSplit = lastElement.innerText.split(" ");
    const number = parseInt(lastElementSplit[1]) + 1;

    const newItem = document.createElement("div");
    newItem.className = "flexbox-child";
    newItem.innerText = `Item ${number}`;
    return parentContainer.appendChild(newItem);
}

function deleteItem(e) {
    const newArray = parentContainer.querySelectorAll("div");
    const lastElement = newArray[newArray.length - 1];
    console.log(lastElement);
    return parentContainer.removeChild(lastElement);
}