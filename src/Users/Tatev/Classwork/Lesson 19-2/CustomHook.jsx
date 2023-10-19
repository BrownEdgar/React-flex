import { useState } from "react";


export default function useCustomHook(initialValue = 0) {
  const [value, setvalue] = useState(initialValue);

  const minus = () => setvalue(value - 1)
  const plus = () => setvalue(value + 1)

  return [value, { minus, plus }, setvalue]
}
