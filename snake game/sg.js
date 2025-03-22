var size = 25;
var row = 20;
var col = 20;
var board;
var context;
var snakex = size * 5;
var snakey = size * 5;
var speedx = 0;
var speedy = 0;
var snakebody = [];
var foodx;
var foody;
var gameover = false;
var score = 0; 

window.onload = function () {
    board = document.getElementById("board");
    board.height = row * size;
    board.width = col * size;
    context = board.getContext("2d");

    placefood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000 / 5);
};

function update() {
    if (gameover) {
        return;
    }

    context.fillStyle = "blue";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("Score: " + score, 10, 20);

    context.fillStyle = "lightgreen";
    context.fillRect(foodx, foody, size, size);

    if (snakex == foodx && snakey == foody) {
        snakebody.push([foodx, foody]);
        score++; 
        placefood();
    }

    for (var i = snakebody.length - 1; i > 0; i--) {
        snakebody[i] = snakebody[i - 1];
    }

    if (snakebody.length) {
        snakebody[0] = [snakex, snakey];
    }

    snakex += speedx * size;
    snakey += speedy * size;

    context.fillStyle = "red";
    context.fillRect(snakex, snakey, size, size);

    for (var i = 0; i < snakebody.length; i++) {
        context.fillRect(snakebody[i][0], snakebody[i][1], size, size);
    }

    if (snakex < 0 || snakex >= col * size || snakey < 0 || snakey >= row * size) {
        gameover = true;
        alert("Game Over! Final Score: " + score);
    }

    for (var i = 0; i < snakebody.length; i++) {
        if (snakex == snakebody[i][0] && snakey == snakebody[i][1]) {
            gameover = true;
            alert("Game Over! Final Score: " + score);
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && speedy != 1) {
        speedx = 0;
        speedy = -1;
    } else if (e.code == "ArrowDown" && speedy != -1) {
        speedx = 0;
        speedy = 1;
    } else if (e.code == "ArrowLeft" && speedx != 1) {
        speedx = -1;
        speedy = 0;
    } else if (e.code == "ArrowRight" && speedx != -1) {
        speedx = 1;
        speedy = 0;
    }
}

function placefood() {
    foodx = Math.floor(Math.random() * col) * size;
    foody = Math.floor(Math.random() * row) * size;
}
