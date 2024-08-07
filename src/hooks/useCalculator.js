import { useState } from "react";

export default function useCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return { input, result };
}
