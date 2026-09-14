function calculate() {
    let left = Number(document.getElementById("left").value);
    let right = Number(document.getElementById("right").value);
    let operator = document.getElementById("operator").value;

    let leftText = document.getElementById("left").value;
    let rightText = document.getElementById("right").value;

    if (
        leftText == "" ||
        rightText == "" ||
        left < 0 ||
        right < 0 ||
        !Number.isInteger(left) ||
        !Number.isInteger(right)
    ) {
        alert("Error :(");
        return;
    }

    if ((operator == "/" || operator == "%") && right == 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    if (operator == "+") {
        result = left + right;
    }
    else if (operator == "-") {
        result = left - right;
    }
    else if (operator == "*") {
        result = left * right;
    }
    else if (operator == "/") {
        result = left / right;
    }
    else if (operator == "%") {
        result = left % right;
    }

    alert(result);
    console.log(result);
}

setInterval(function () {
    alert("Please, use me...");
}, 30000);