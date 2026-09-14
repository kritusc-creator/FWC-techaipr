let size = 200;
let color = "red";

$("#balloon").click(function () {
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
});

$("#balloon").mouseleave(function () {
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
});

function changeBalloon() {
    $("#balloon").css({
        "width": size + "px",
        "height": size + "px",
        "background-color": color
    });
}