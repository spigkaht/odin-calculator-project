const displayValue = 0;
let count = 0;

const equation = {
  operand1: "",
  operator: "",
  operand2: "",
  result: "",
};

const allButtons = document.querySelectorAll(".buttons");
const clearButton = document.querySelector("#clear");
const outputBox = document.querySelector("#output").childNodes[1];

const clearOutputDisplay = () => {
  outputBox.textContent = "";
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
    case "+":
      result = sum(operand1, operand2);
      break;
    case "-":
      result = subtract(operand1, operand2);
      break;
    case "*":
      result = multiply(operand1, operand2);
      break;
    case "/":
      result = divide(operand1, operand2);
      break;
    default:
      alert("uh oh! something went wrong");
  }

  return result;
};

const equationInput = (click, equationValue) => {
    if (equationValue.operator === "" && click.target.classList.contains("digits")) {
      equation.operand1 += click.target.value;
    } else if (equationValue.operator === "" && click.target.classList.contains("operators")) {
      equation.operator += click.target.value;
    }
    console.log(equationValue, click);
};

createOutputDisplay();

clearButton.addEventListener("click", clearOutputDisplay);

allButtons.forEach((click) => {
  click.addEventListener("click", (e) => {
    equationInput(e, equation);
  });
});
