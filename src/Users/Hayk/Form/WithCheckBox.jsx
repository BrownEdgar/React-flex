import { useState } from "react"
import "./App.scss"

export default function WithCheckBox() {
    const [policy, setpolicy] = useState(false)
     

const handleChange =(e)=>{
    setpolicy(e.target.checked)

}
    
  return (
    <div className="WithCheckBox">
    <form>
        <input type="email" name="email" id="email"/>
        <input type="checkbox" id="policy" onChange={handleChange}/>
        <label htmlFor="policy">Privacy Policy</label>
        <input type="submit" disabled={!policy}/>
    </form>
    </div>
  )
}

