import { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState('')

  // when a button is clicked
  const handleClick = (value) => {
    switch (value) {
      case 'C': // clear button
        setDisplay('');
        break;
      case '=': // equal button
        try {
          setDisplay(calculate(display))
        } catch {
          setDisplay('Error');
        }
        break;
      default: // number or operator button
        setDisplay((prev) => prev + value);
        break;
    }
  };

  // calculate the result of the expression
  const calculate = (expression) => {
    // regex to match valid expressions
    // e.g. 1+1, 2-3, 4*5, 6/7
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;

    // validate the expression
    const match = expression.match(validExpression);
    if (!match) {
      throw new Error('Invalid expression');
    }

    const num1 = Number(match[1]); // first integer
    const operator = match[2]; // operator
    const num2 = Number(match[3]); // second integer

    // calculate the result
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        throw new Error('Invalid operator');
    }

    return result.toString();
  };

  // Array of button values
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ];

  return (
    <>
      <h2>Simple Calculator</h2>
      <div className="calculator-container">
        {display ? display : '0'}
      </div>
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </>
  )
}

