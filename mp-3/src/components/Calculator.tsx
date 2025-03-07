import { useState } from "react";
import styled from "styled-components";



const StyledCalculator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2vh 3vw;
  padding: 3vh 4vw;

  label {
    font-size: calc(1px + 2vw);
    margin: 1vh 1vw;
  }

  input {
    font-size: calc(1px + 2vw);
    margin: 1vh 1vw;
    padding: 1vh 1vw;
    border: 1px solid blueviolet;
  }

  button {
    font-size: calc(1px + 1vw);
    margin: 1vh 1vw;
    padding: 1vh 1vw;
    border: 1px solid blueviolet;
    background-color: blueviolet;
    color: white;
  }

  h3 {
    font-size: calc(1px + 2vw);
    margin: 1vh 1vw;
  }

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;

    label {
      font-size: calc(1px + 4vw);
      margin: 1vh 1vw;
    }

    input {
      font-size: calc(1px + 2vw);
      margin: 1vh 1vw;
    }
  }
`;






export default function Calculator() {


  const [firstNum, setFirstNum] = useState<number | string>();
  const [secondNum, setSecondNum] = useState<number | string>();
  const [result, setResult] = useState<string | number>(0);
  const [error, setError] = useState<boolean>(false);

  function errorCheck() {
    if (isNaN(Number(firstNum)) || isNaN(Number(secondNum))) {
      setError(true);
      setResult("Error: Invalid input");
      return true;
    }
    setError(false);
    return false; 
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

  function clear(){
    setFirstNum("");
    setSecondNum("");
    setResult("");

  }


  return (
    <StyledCalculator>
          <label>First Input</label>
          <input
            placeholder="Enter your first number"
            value={firstNum}
            onChange={(e) => setFirstNum(Number(e.target.value))}
          />
          <label>Second Input</label>
          <input
            placeholder="Enter your second number"
            value={secondNum}
            onChange={(e) => setSecondNum(Number(e.target.value))}
          />
      {error && <div className="error-message">{result}</div>}
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={exponent}>^</button>
        <button onClick={clear}>Clear</button>
      <h3 id="result">
        <label>Result: </label>
        <span>{result}</span>
      </h3>
      </StyledCalculator>
  );
}
