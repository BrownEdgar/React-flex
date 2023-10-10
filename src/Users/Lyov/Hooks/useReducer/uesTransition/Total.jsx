

export default function Total() {
  const total = () => {
    let sum = 0
    for (let i = 0; i <= 1e4; i++) {
      sum += i      
    }
    return sum
  }
  return (
    <div>
       <h1>{total()}</h1>
    </div>
  )
}
