/*const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const list = document.getElementById("myList")
const addItem = function () {
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new item!"
    list.appendChild(newItem)
}
const newbox = document.getElementById("box")
newbox.onclick = function () {
    newbox.innerHTML = "clicked"
}*/

const box = document.createElement("div") // dynamically creating an element

box.setAttribute("class", "box")
box.onclick = function(){       // adding an event to the new element
    box.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(box) // now the box will be on the page, and will react to a click!