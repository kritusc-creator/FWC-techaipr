$("#calculator").submit(function (event) {
    event.preventDefault();

    let leftText = $("#left").val();
    let rightText = $("#right").val();

    let left = Number(leftText);
    let right = Number(rightText);
    let operator = $("#operator").val();

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
    else {
        result = left % right;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);