let player = document.querySelector('.player')
let platform = document.querySelector('.platform')
let ball = document.querySelector('.ball')
let shadow = document.querySelector('.shadow')
let level = document.querySelector('.level')
let score = document.querySelector('.score')
let container = document.querySelector('.container')
let bricks = document.getElementsByClassName('brick')
let brickBoundingBox = bricks[0].parentElement
let movableObjects = document.getElementsByClassName('movable')

let playerReady
let ballInMotion;
let brickPositions = fillBricksPosition(bricks)

// setInterval(() => {
//     let left =0
//     startShakeAnimation()

//     function startShakeAnimation() {

//         ball.style.left = `${left+=5}%`
//     }
// }, 1100)

function fillBricksPosition(bricks) {
    let brickPositions = []
    Array.from(bricks).forEach(brick => {

        let boundingBox = brick.getBoundingClientRect()

        brickPositions.push({
            "top": boundingBox.top,
            "right": boundingBox.right,
            "bottom": boundingBox.bottom,
            "left": boundingBox.left
        })

    })

    return brickPositions
}

window.addEventListener('mousemove', event => {
    let x = event.x
    let playerMidPoint = player.clientWidth / 2

    if (playerReady) {
        Array.from(movableObjects).forEach(object => object.style.left = `${x - playerMidPoint}px`)
    }
})

window.addEventListener('mousedown', event => {
    playerReady = !!!playerReady;
})

platform.addEventListener('click', event => {

    if (!ballInMotion) moveBall();

    function moveBall() {
        ballInMotion = true
        ball.classList.remove('shake')
        shadow.classList.remove('shake')

        let playerMidPoint = player.clientWidth / 2
        let randX = Math.random() * 20
        let newBallPosition = ball.clientTop

        ball.style.left = playerMidPoint - randX

        if (ballInMotion) {
            platform.classList.remove('movable')
            shadow.style.display = 'none'
        }

        setInterval(() => {
            let incrVal = -5
            if (checkCollision(ball, brickBoundingBox)) incrVal = +5
            ball.style.top = `${newBallPosition += incrVal}px`
        }, 1)

    }
})

function checkCollision(element1, element2) {
    let rect1 = element1.getBoundingClientRect()
    let rect2 = element2.getBoundingClientRect()

    let box1 = {
        "x": rect1.x,
        "y": rect1.y,
        "top": rect1.top,
        "bottom": rect1.bottom,
        "width": rect1.width,
        "height": rect1.height
    }

    let box2 = {
        "x": rect2.x,
        "y": rect2.y,
        "top": rect2.top,
        "bottom": rect2.bottom,
        "width": rect2.width,
        "height": rect2.height
    }

    if (box1["top"] >= box2["top"] && box1["top"] <= box2["top"]) {
        return true
    }

    if (box1["top"] >= box2["top"] && box1["top"] <= box2["top"]) {
        return true
    }

    return false
}