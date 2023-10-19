import Countries from './Countries'
import "./App.css"

export default function App() {
  const [data, setData] = useState(["Ruussian", "USA", "Chine", "Brazil", "Ecvador"])
  const [colors, setColors] = useState(["black", "red", "blue", "tomato", "teal"])

  const randomColor=() =>{
    // return colors[Math.floor(Math.random() * colors.length )]
    return '#'+ Math.random().toString(16).slice(2,8)
  }

  return (
    <div>
      <Countries countries={data} randomColor={randomColor}/>
    </div>
  )
}
