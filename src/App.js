import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";

import Wrapper from "./components/Wrapper";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import Screen from "./components/Screen";
import History from "./components/History";

const btnValues = [
  ["AC", "+/-", "%", "÷"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
const App = () => {
  const [numExp, setNumExp] = useState({
    result: "",
    resultStatus: false,
  });
  const [calculationHistory, setCalculationHistory] = useState([]);

  // Function to add a calculation to the history
  const addToHistory = (calculation) => {
    const newHistory = [calculation, ...calculationHistory];
    setCalculationHistory(newHistory);

    // Store the updated history in local storage
    localStorage.setItem("calculationHistory", JSON.stringify(newHistory));
  };

  function replaceChars(inputString) {
    if (inputString.includes("x")) {
      inputString = inputString.replace(/x/g, "*");
    }
    if (inputString.includes("÷")) {
      inputString = inputString.replace(/÷/g, "/");
    }
    return inputString;
  }
  const handleClick = (buttonValue) => {
    if (buttonValue === "=") {
      try {
        addToHistory({
          expression: numExp.result, // Store the expression
          result: (eval(replaceChars(numExp.result)) || "") + "", // Store the result
        });
        setNumExp({
          // eslint-disable-next-line no-eval
          result: (eval(replaceChars(numExp.result)) || "") + "",
          resultStatus: true,
        });
      } catch (e) {
        setNumExp({
          result: "error",
        });
      }
    } else if (buttonValue === "AC") {
      setNumExp({
        result: "",
      });
    } else if (buttonValue === "+/-") {
      if (numExp.result.length > 1) {
        setNumExp({
          result: numExp.result.slice(0, -1),
        });
      } else {
        setNumExp({
          result: "",
        });
      }
    } else if (buttonValue === "%") {
      setNumExp({
        result: numExp.result / 100,
      });
    } else {
      setNumExp({
        result: numExp.result + buttonValue,
      });
    }
  };
  console.log(numExp.result);
  return (
    <>
      <Wrapper>
        <Screen result={numExp.result} setNumExp={setNumExp} numExp={numExp} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button handleClick={() => handleClick(btn)} value={btn} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </>
  );
};

export default App;
