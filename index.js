const parentContainer = document.getElementById("flexbox-parent");
const buttons = document.querySelectorAll(".button-section button");
const addItem = document.querySelector("#add");
const removeItem = document.querySelector("#remove");

buttons.forEach(button => button.addEventListener("click", (e) => changeStyle(e)));
addItem.addEventListener("click", (e) => createItem(e));
removeItem.addEventListener("click", (e) => deleteItem(e));

function changeStyle(e) {
    e.target.parentNode.querySelectorAll("button").forEach(button => button.classList.remove("active"));
    e.target.className = "active";
    const propertyName = e.target.parentNode.querySelector("span").innerText;
    return parentContainer.style[propertyName] = e.target.innerText;
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