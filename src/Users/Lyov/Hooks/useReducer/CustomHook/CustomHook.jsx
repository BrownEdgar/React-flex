import { useState } from "react"


export default function useCustomHook(initialValue = 0) {
  const [value, setValue] = useState(initialValue)

  const minus = () => { setValue(value - 1) }
  const plus = () => { setValue(value + 1) }


  return [value, { minus, plus }, setValue]
}
