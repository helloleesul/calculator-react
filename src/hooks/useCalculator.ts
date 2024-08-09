import { useState } from "react";
import { calculate } from "calculator-utils";
import useToast from "./useToast";

export default function useCalculator() {
  // 입력 값
  const [input, setInput] = useState("");
  // Toast 추가 함수
  const { addToast } = useToast();

  // 입력 핸들러
  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const currentInput = target.value;

    setInput((prev) => {
      const newPrev = [...prev];
      const lastInput = newPrev[newPrev.length - 1];

      // 연산자 중복으로 입력 시, 마지막으로 선택한 연산자로 입력
      if (isNaN(Number(lastInput)) && isNaN(Number(currentInput))) {
        newPrev.pop();
        newPrev.push(currentInput);
        return newPrev.join("");
      } else return prev + currentInput;
    });
  };

  // 모듈 사용해 계산
  const onCalculator = () => {
    const resultValue = calculate(input);

    if (isNaN(resultValue)) {
      addToast(resultValue);
      // onAllClean();
    } else {
      setInput(resultValue);
    }
  };

  // 리셋
  const onAllClean = () => setInput("");

  return { input, handleInput, onCalculator, onAllClean };
}
