import styles from "./Calculator.module.scss";
import useCalculator from "../../hooks/useCalculator";

const Calculator = () => {
  const { input, handleInput, onCalculator, onAllClean } = useCalculator();

  return (
    <div className={styles.calculator}>
      <input type="text" value={input} readOnly />
      <section className={styles.container}>
        <button onClick={handleInput} value="7">
          7
        </button>
        <button onClick={handleInput} value="8">
          8
        </button>
        <button onClick={handleInput} value="9">
          9
        </button>
        <button onClick={handleInput} value="+" className={styles.operator}>
          +
        </button>
        <button onClick={handleInput} value="6">
          6
        </button>
        <button onClick={handleInput} value="5">
          5
        </button>
        <button onClick={handleInput} value="4">
          4
        </button>
        <button onClick={handleInput} value="-" className={styles.operator}>
          -
        </button>
        <button onClick={handleInput} value="3">
          3
        </button>
        <button onClick={handleInput} value="2">
          2
        </button>
        <button onClick={handleInput} value="1">
          1
        </button>
        <button onClick={handleInput} value="*" className={styles.operator}>
          ×
        </button>
        <button onClick={onAllClean} className={styles.setting}>
          AC
        </button>
        <button onClick={handleInput} value="0">
          0
        </button>
        <button onClick={onCalculator}>=</button>
        <button onClick={handleInput} value="/" className={styles.operator}>
          ÷
        </button>
      </section>
    </div>
  );
};

export default Calculator;
