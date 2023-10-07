import useRandom from "./useRandom"


export default function App() {
  const [number] = useRandom(4, 'number')
  const [letterLower] = useRandom(4, 'string', "lower")
  const [letterUpper] = useRandom(6, 'string', "upper")

  return (
    <div>
      <div>Number: {number}</div>
      <div>StringLower: {letterLower}</div>
      <div>StringUpper: {letterUpper}</div>
    </div>
  )
}
