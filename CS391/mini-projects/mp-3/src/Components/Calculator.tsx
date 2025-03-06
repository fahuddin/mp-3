import { useState } from "react";

export default function Calculator() {
  const [firstNum, setFirstNum] = useState<number>(0);
  const [secondNum, setSecondNum] = useState<number>(0);
  const [result, setResult] = useState<string | number>(0);
  const [error, setError] = useState<boolean>(false);

  function errorCheck() {
    if (isNaN(Number(firstNum)) || isNaN(Number(secondNum))) {
      setError(true);
      setResult("Error: Invalid input");
      return true; // return true if error exists
    }
    setError(false);
    return false; // return false if no error
  }

  function addition() {
    if (!errorCheck()) {
      const res = Number(firstNum) + Number(secondNum);
      setResult(res);
    }
  }

  function subtraction() {
    if (!errorCheck()) {
      const res = Number(firstNum) - Number(secondNum);
      setResult(res);
    }
  }

  function multiplication() {
    if (!errorCheck()) {
      const res = Number(firstNum) * Number(secondNum);
      setResult(res);
    }
  }

  function divide() {
    if (!errorCheck()) {
      if (secondNum === 0) {
        setError(true);
        setResult("Error: Division by zero");
        return;
      }
      const res = Number(firstNum) / Number(secondNum);
      setResult(res);
    }
  }

  function exponent() {
    if (!errorCheck()) {
      const base = Number(firstNum);
      const exponent = Number(secondNum);
      let res = 1;
      for (let i = 0; i < exponent; i++) {
        res = res * base;
      }
      setResult(res);
    }
  }

  return (
    <div id="calculator">
      <div id="input-section">
        <div>
          <label>First Input</label>
          <input
            type="number"
            value={firstNum}
            onChange={(e) => setFirstNum(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Second Input</label>
          <input
            type="number"
            value={secondNum}
            onChange={(e) => setSecondNum(Number(e.target.value))}
          />
        </div>
      </div>
      {error && <div className="error-message">{result}</div>}
      <div id="button-section">
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={exponent}>^</button>
      </div>
      <div id="result">
        <label>Result: </label>
        <span>{result}</span>
      </div>
    </div>
  );
}
