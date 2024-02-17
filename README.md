# odin-calculator-project

JavaScript project for Odin Project. Create a fully functioning simple
calculator with button input and display.

steps to produce:
> user clicks button(s) to input number // must be digits
> user clicks button to choose operator // + - * /
> user clicks button(s) to input number // must be digits
> if user clicks equals button > evaluate equation and display total
> else continue accepting inputs // must be digits > operator > digits ..
> evaluate each equation and display total after each operator > digit input

> digits pressed => += operand1
> operator pressed => += operator
> digits pressed && operand1 => += operand2
> equals pressed => operate()

todo
> reset display on new operand
> fix duplicate decimal entry
> object for status of operators, operand etc (ie is operation in progress?)
> create event listener for equals button