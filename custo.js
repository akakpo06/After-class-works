let board = [
    `./Assets/Images/Presentation-plat1.jpg`,
    `./Assets/Images/Presentation-plat-2.jpg`,
    `./Assets/Images/Presentation-plat-3.jpg`
]
let position = 0
function moveTo(n) {
    position += n
    if (position === -1) {
        position = 2
    }
    else if (position === 3) {
        position = 0
    }

    document.getElementById("image-cont").innerHTML = `<img src="${board[position]}" alt="">`
    
}