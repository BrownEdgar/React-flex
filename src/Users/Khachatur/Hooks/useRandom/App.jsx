import useRandom from "./useRandom"

export default function App() {

  const randomNums = useRandom(4, 1)
  const randomStrings = useRandom(4, 2, "uppercase")
  return (
    <div>
        <h1>Random Numbers: {randomNums.map((num, index) => (
            <li key={index}>{num}</li>
        ))}</h1>
        <h1>Random Strings: {randomStrings.map((string, index) => (
            <li key={index}>{string}</li>
        ))}</h1>
    </div>
  )
}