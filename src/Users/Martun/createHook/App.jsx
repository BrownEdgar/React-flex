import useRadnom from "./Random";
import './App.css'

export default function App() {
    const [value, { randNum, randWord, randUpperWord }, setValue] = useRadnom([])

    return (
        <div className="container">
            <h1 className="result">Result: {value}</h1>
            <button  onClick={randNum}>randNum</button>
            <button onClick={randWord}>randWord</button>
            <button onClick={randUpperWord}>randUpperWord</button>
        </div>
    )
}