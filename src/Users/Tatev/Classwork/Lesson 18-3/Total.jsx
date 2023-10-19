
export default function Total() {
  console.log("djfhd");
  const totalSum =() =>{
    let sum = 0
    for(let i = 0; i <= 1e6; i++){
      sum += i
    }
    return sum
  }

  return (
    <div>
      <h1>{totalSum(0)}</h1>
    </div>
  )
}
