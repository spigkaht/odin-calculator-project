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

const sum = () => {};

const subtract = () => {};

const multiply = () => {};

const divide = () => {};

const operate = (num1, num2, operate) => {};

createOutputDisplay();

clearButton.addEventListener("click", clearOutputDisplay);