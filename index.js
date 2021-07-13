// Variables for HTML elements
const parentContainer = document.getElementById("flexbox-parent");
const buttons = document.querySelectorAll(".button-section button");
const addItem = document.querySelector("#add");
const removeItem = document.querySelector("#remove");
const codeContainer = document.getElementById("code-container")

// Event listeners on buttons
buttons.forEach(button => button.addEventListener("click", (e) => changeStyle(e)));
addItem.addEventListener("click", createItem);
removeItem.addEventListener("click", deleteItem);

// Adds current CSS styling to right-hand box
function setStyling(property, value) {

    // Create new code element
    propertyElement = document.createElement("code");
    propertyElement.id = property

    // Remove existing code element for property passed in as an argument
    if (codeContainer.querySelector(`#${property}`)) {
        codeContainer.removeChild(codeContainer.querySelector(`#${property}`));
    }

    // Switch statement to handle CSS code in right-hand box
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

    // Alphabetize CSS code in right-hand box
    Array.from(codeContainer.querySelectorAll("code"))
        .sort((a, b) => a.id.localeCompare(b.id))
        .forEach(code => codeContainer.appendChild(code))
}

// Changes flexbox-parent styling
function changeStyle(e) {
    
    // Update button state to reflect flexbox-parent styling
    e.target.parentNode.querySelectorAll("button")
        .forEach(button => button.classList.remove("active"));
    e.target.className = "active";
    
    // Grab styling property and value, then pass into function setStyling()
    const propertyName = e.target.parentNode.querySelector("span").innerText;
    const value = e.target.innerText
    setStyling(propertyName, value)

    // Update flexbox-parent styling
    return parentContainer.style[propertyName] = value;
}

// Adds a new item to the flexbox-parent container
function createItem() {
    
    // Create an array of the existing items
    const arrayOfItems = parentContainer.querySelectorAll("div");

    // Find the last item and extract the number
    const lastElement = arrayOfItems[arrayOfItems.length - 1];
    const lastElementSplit = lastElement.innerText.split(" ");
    
    // Increment the found number by 1
    const number = parseInt(lastElementSplit[1]) + 1;

    // Create and append a new item with the incremented number
    const newItem = document.createElement("div");
    newItem.className = "flexbox-child";
    newItem.innerText = `Item ${number}`;
    return parentContainer.appendChild(newItem);
}

// Removes an existing item in the flexbox-parent container
function deleteItem() {

    // Create an array of existing items, grab the last one, and remove it from the parent element
    const newArray = parentContainer.querySelectorAll("div");
    const lastElement = newArray[newArray.length - 1];
    return parentContainer.removeChild(lastElement);
}