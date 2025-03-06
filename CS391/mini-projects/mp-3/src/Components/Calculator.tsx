import React, { useState } from "react";


export default function Calculator(){

const [firstNum, setFirstNum] = useState(0);
const [secondNum, setSecondNum] = useState(0);
const [result, setResult] = useState(0);
const [error, setError] = useState(false);

function errorCheck(){
    if (isNaN(Number(firstNum)) || isNaN(Number(secondNum))){
        setError(true);
    }

}

function addition(){
    const res = Number(firstNum) + Number(secondNum);
    setResult(res);
}

function subtraction(){
    const res = Number(firstNum) - Number(secondNum);
    setResult(res);
}

function multiplication(){
    const res = Number(firstNum) * Number(secondNum);
    setResult(res);
}

function divide(){
    const res = Number(firstNum) / Number(secondNum);
    setResult(res);
}

function exponent(){
    const base = Number(firstNum);
    const exponent = Number(secondNum);
    let res = 1
    for (let i = 1; i < exponent; i++ ){
        res = res * base

    }

    setResult(res);
}


return (
    <div id = "calculator">

        <div id = "input-section">
            <div>
                <label>First Input</label><input value={firstNum}/>
            </div>
            <div>
                <label>Second Input</label><input value={firstNum}/>
            </div>
        </div>
        <div id = "button-section">
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={exponent}>^</button>

        </div>
    </div>


)




}