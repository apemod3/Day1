//calculator programme

//get inputs from user
document.addEventListener("DOMContentLoaded", function() {
    
    let num1 = parseFloat(prompt("Enter first number: "));
    let operator = prompt("Enter your operator(*, /, +, -):");
    let num2 = parseFloat(prompt("Enter second number:"));

    //calculate
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else {
        result = "Invalid!";
    }

    //display result
    console.log("Result: " + result);
    alert("Result: " + result);
});
