import RandExp from "randexp";
import { useState } from "react";

export default function useRadnom(initalValue = []) {
    const [value, setValue] = useState(initalValue)

    const randNum = () => {
        let arr= []
        for(let i = 0; i < 4; i++){
            let randNum = Math.floor(Math.random()*1000)
            arr.push(randNum,' ')
        }
        setValue(arr)
    }
    const randWord = () => {
        let strArr = []
        for(let i = 0; i < 4; i++){
            let rnadStr = new RandExp(/[a-z]/).gen()
            strArr.push(rnadStr, ' ')
        }
        setValue(strArr)
    }

    const randUpperWord =() => {
        let strArr = []
        for(let i = 0; i < 6; i++){
            let rnadStr = new RandExp(/[a-z]/).gen()
            strArr.push(rnadStr.toUpperCase(), ' ')
        }
        setValue(strArr)
    }
    return  [value, {randNum, randWord, randUpperWord}, setValue]
}