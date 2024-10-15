import React, { useRef, useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const InputRef = useRef("");
  const OperatorRef = useRef("");

  function handleClick(val) {
    setInput((prvVal) => prvVal + val);
  }

  function handleOperator(opr) {
    InputRef.current = input;
    setInput("");
    OperatorRef.current = opr;
  }
  function handleCalculate() {
    const firstVal = InputRef.current;
    const oprVal = OperatorRef.current;
    const secondVal = input;
    let result = 0;

    switch (oprVal) {
      case "+":
        result = Number(firstVal) + Number(secondVal);
        break;
      case "-":
        result = Number(firstVal) - Number(secondVal);
        break;
      case "*":
        result = Number(firstVal) * Number(secondVal);
        break;
      case "/":
        result = Number(firstVal) / Number(secondVal);
        break;
      case "%":
        result = (Number(firstVal) / 100) * Number(secondVal);
        break;

      default:
        result = "Error";
    }

    setInput(result);
  }
  function handleClear() {
    setInput("");
  }

  function handleToggle() {
    setInput((prevInput) =>
      prevInput.startsWith("-") ? prevInput.slice(1) : "-" + prevInput
    );
  }
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} />
      </div>
      <div className="buttons">
        <button onClick={() => handleClear("C")}>C</button>
        <button onClick={() => handleToggle("+/-")}>+/-</button>
        <button onClick={() => handleOperator("%")}>%</button>
        <button onClick={() => handleOperator("/")}>/</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleOperator("*")}>*</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleOperator("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleOperator("+")}>+</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleCalculate("=")}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
