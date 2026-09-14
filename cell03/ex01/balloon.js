let size = 200;
let color = "red";

function growBalloon() {
    size = size + 10;

    if (size > 420) {
        size = 200;
    }

    if (color == "red") {
        color = "green";
    }
    else if (color == "green") {
        color = "blue";
    }
    else {
        color = "red";
    }

    changeBalloon();
}

function shrinkBalloon() {
    if (size > 200) {
        size = size - 5;
    }

    if (color == "red") {
        color = "blue";
    }
    else if (color == "blue") {
        color = "green";
    }
    else {
        color = "red";
    }

    changeBalloon();
}

function changeBalloon() {
    let balloon = document.getElementById("balloon");

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = color;
}