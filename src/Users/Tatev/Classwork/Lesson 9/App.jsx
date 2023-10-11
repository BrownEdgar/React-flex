import { useState } from 'react';
import Child from './Child'
import data from './data.json'

export default function App() {
  const [first, setFirst] = useState(data);
  return (
    <div>
      <Child name={"React"} arr={["a", ""]} btnType="lg" age={90} first={first} />
    </div>
  )
}
