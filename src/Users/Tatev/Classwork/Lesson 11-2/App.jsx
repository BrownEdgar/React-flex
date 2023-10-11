import { useState } from 'react'


export default function WithChange() {
  const [value, setvalue] = useState("react");
  const handeChange = (e) => {
    setvalue(e.target.value)
  }
  return (
    <div>
      <h1>{value}</h1>
      <form>
        <input type="text" value={value} onChange={handeChange} />
      </form>
    </div>
  )
}
