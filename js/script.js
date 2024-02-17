const num1 = "";
const num2 = "";
const operator = "";

const displayValue = 0;

let count = 0;

const clearButton = document.querySelector("#clear");
const outputBox = document.querySelector("#output").childNodes[1];

const clearOutputDisplay = () => {
  outputBox.textContent = "";
}

const createOutputDisplay = () => {
  const digitList = document.querySelectorAll(".digits");

  digitList.forEach((digit) => {
    digit.addEventListener("click", (e) => {
      if (outputBox.textContent === "0" && count === 0) {
        outputBox.textContent = "";
      }

      if (outputBox.textContent.includes(".") && e.target.value === ".") {
        return;
      }

      outputBox.textContent += e.target.value;

      count++;
    });
  });
};

const operate = (operand1, operand2, operator) => {
  let result = 0;
  
  switch (operator) {
    case "add":
      result = sum(operand1, operand2);
      break;
    case "subtract":
      result = subtract(operand1, operand2);
      break;
    case "multiply":
      result = multiply(operand1, operand2);
      break;
    case "divide":
      result = divide(operant1, operand2);
      break;
    default:
      alert("uh oh! something went wrong");
  }

  return result;
};

const sum = (operand1, operand2) => {
  return operand1 + operand2;
};

const subtract = (operand1, operand2) => {
  return operand1 - operand2;
};

const multiply = (operand1, operand2) => {
  return operand1 * operand2;
};

const divide = (operand1, operand2) => {
  return operand1 / operand2;
};

console.log(operate(10, 4, "add"));

createOutputDisplay();

clearButton.addEventListener("click", clearOutputDisplay);