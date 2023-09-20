import { useState } from 'react'
import './App.scss'

export default function WithCheckbox() {
  const [policy, setPolicy] = useState(false);
  const handleChange = (e) => {
    setPolicy(e.target.checked)
  }
  return (
    <div className='App'>
      <form>
        <input type="email" name="email" id="email" />
        <input type="checkbox" id='policy' onChange={handleChange} />
        <label htmlFor="policy">Privacy Policy</label>
        <input type="submit" value="register" disabled={!policy} />
      </form>
    </div>
  )
}
