let player = document.getElementById('player')
let ball = document.querySelector('.ball')
let shadow = document.querySelector('.shadow')
let level = document.querySelector('.level')
let score = document.querySelector('.score')
let container = document.querySelector('.container')

let playerReady

window.addEventListener('mousemove', event => {
    let x = event.x
    let playerMidPoint = player.clientWidth / 2

    if (playerReady) {
        player.style.left = `${x - playerMidPoint}px`
    }
})

window.addEventListener('mousedown', event => {
    playerReady = !!!playerReady;
})

player.addEventListener('click', event => {
    event.preventDefault()
    moveBall();

    function moveBall() {
        ball.classList.remove('shake')
        shadow.classList.remove('shake')

        setInterval(() => {
            ball.style.top = `${time/5}px`
        }, 20)

    }
})