import { useEffect, useState } from "react";
import styles from "./Calculator.module.scss";
import { add } from "calculator-utils";

export const Calculator = () => {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const [currentSymbol, setCurrentSymbol] = useState("");

  // useEffect(() => {
  //   // if (!currentSymbol) return;
  //   console.log("symbol change!");
  //   setResult(input);
  // }, [currentSymbol, input]);

  useEffect(() => {
    if (!input) return;
    console.log("input change!");
  }, [input]);

  const handleInput = (e) => {
    const currentInput = Number(e.target.innerText);

    // 계산 심볼이라면
    if (isNaN(currentInput)) {
      // 현재 심볼 상태
      setCurrentSymbol(e.target.innerText);
      // setResult(input);
      onCalculator();
    }
    // 숫자라면
    else {
      // if (!currentSymbol) {
      setInput((prev) => {
        if (prev === 0) {
          return `${e.target.innerText}`;
        } else return `${prev}${e.target.innerText}`;
      });
      // } else setInput(e.target.innerText);
    }
  };

  const onAllClean = () => {
    setInput(0);
    setResult(0);
    setCurrentSymbol("");
  };

  const onCalculator = () => {
    switch (currentSymbol) {
      case "+":
        console.log(add(result, input));
        // setResult();
        break;
      // case "-":
      //   console.log(value);
      //   break;
      // case "×":
      //   console.log(value);
      //   break;
      // case "÷":
      //   console.log(value);
      //   break;
    }
  };

  return (
    <div className={styles.calculator}>
      <input type="number" value={input} />
      <section className={styles.container}>
        <button onClick={handleInput}>7</button>
        <button onClick={handleInput}>8</button>
        <button onClick={handleInput}>9</button>
        <button onClick={handleInput}>+</button>
        <button onClick={handleInput}>6</button>
        <button onClick={handleInput}>5</button>
        <button onClick={handleInput}>4</button>
        <button onClick={handleInput}>-</button>
        <button onClick={handleInput}>3</button>
        <button onClick={handleInput}>2</button>
        <button onClick={handleInput}>1</button>
        <button onClick={handleInput}>×</button>
        <button onClick={onAllClean}>AC</button>
        <button onClick={handleInput}>0</button>
        {/* <button onClick={onCalculator}>=</button> */}
        <button onClick={handleInput}>÷</button>
      </section>
    </div>
  );
};
