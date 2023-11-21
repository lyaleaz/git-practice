/*console.log("document")
const playingField = document.getElementById("playing-field")
console.log(playingField)
const down = document.getElementById("down")
console.log(down)
console.log(down.innerHTML)
down.innerHTML = "Down"

playingField.style.backgroundColor = 'blue'
*/
const moveRight = function(){
    const ball = document.getElementById("ball")
    let left = parseInt(ball.style.left) || 0
    left += 15
    ball.style.left = left + "px"
}
console.log(moveRight)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creator~"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)