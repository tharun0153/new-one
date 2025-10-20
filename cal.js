function calculate(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = document.getElementById("o").value;
    let result;

    if (n3 == "+") {
        result = n1 + n2;
        document.getElementById("result").innerText = "The addition is " + result;
    } else if (n3 == "-") {
        result = n1 - n2;
        document.getElementById("result").innerText = "The subtraction is " + result;
    } else if (n3 == "*") {
        result = n1 * n2;
        document.getElementById("result").innerText = "The multiplication is " + result;
    } else if (n3 == "/") {
        if (n2 === 0) {
            document.getElementById("result").innerText = "Cannot divide by zero";
        } else {
            result = n1 / n2;
            document.getElementById("result").innerText = "The division is " + result;
        }
    } else {
        document.getElementById("result").innerText = "Unknown operator";
    }
}
