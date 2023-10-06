import { useState, useEffect } from "react";

export default function useRandom(length, type, letter) {
  const [result, setResult] = useState("");

  useEffect(() => {
    let randomStr = "";
    for (let i = 0; i < length; i++) {
      if (type === "string") {
        const charCode = Math.floor(Math.random() * (122 - 97) + 97 + 1);
        if (letter === "upper") {
          randomStr += String.fromCharCode(charCode).toUpperCase();
        }else{
          randomStr += String.fromCharCode(charCode)
        }
      } else {
        const number = Math.floor(Math.random() * 1001);
        randomStr += number.toString() + ",";
      }
    }
    setResult(randomStr);
  }, [length, type, letter]);

  return [result];
}