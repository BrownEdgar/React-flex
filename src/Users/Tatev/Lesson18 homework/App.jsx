import { useState } from 'react'
import Users from './Components/Users'
import "./App.scss"

const original =[{
  "id": 1,
  "name": "Koo",
  "age": 25
}, {
  "id": 2,
  "name": "Merrill",
  "age": 30
}, {
  "id": 3,
  "name": "Valerie",
  "age": 39
}, {
  "id": 4,
  "name": "Lief",
  "age": 45
}, {
  "id": 5,
  "name": "Webster",
  "age": 24
}, {
  "id": 6,
  "name": "Desmund",
  "age": 50
}, {
  "id": 7,
  "name": "Doralia",
  "age": 15
}, {
  "id": 8,
  "name": "Abbott",
  "age": 17
}, {
  "id": 9,
  "name": "Clerkclaude",
  "age": 50
}, {
  "id": 10,
  "name": "Constanta",
  "age": 51
}, {
  "id": 11,
  "name": "Georas",
  "age": 46
}, {
  "id": 12,
  "name": "Kennan",
  "age": 59
}, {
  "id": 13,
  "name": "Denice",
  "age": 27
}, {
  "id": 14,
  "name": "Vasilis",
  "age": 16
}, {
  "id": 15,
  "name": "Marne",
  "age": 18
}, {
  "id": 16,
  "name": "Carilyn",
  "age": 53
}, {
  "id": 17,
  "name": "Otho",
  "age": 24
}, {
  "id": 18,
  "name": "Eloise",
  "age": 70
}, {
  "id": 19,
  "name": "Izaak",
  "age": 50
}, {
  "id": 20,
  "name": "Virgie",
  "age": 33
}, {
  "id": 21,
  "name": "Sarena",
  "age": 17
}, {
  "id": 22,
  "name": "Emmalynn",
  "age": 67
}, {
  "id": 23,
  "name": "Archer",
  "age": 18
}, {
  "id": 24,
  "name": "Roosevelt",
  "age": 70
}, {
  "id": 25,
  "name": "Hayyim",
  "age": 24
}, {
  "id": 26,
  "name": "Dominica",
  "age": 68
}, {
  "id": 27,
  "name": "Reynold",
  "age": 52
}, {
  "id": 28,
  "name": "Tremayne",
  "age": 30
}, {
  "id": 29,
  "name": "Magdalena",
  "age": 29
}, {
  "id": 30,
  "name": "Winny",
  "age": 34
}, {
  "id": 31,
  "name": "Hanna",
  "age": 25
}, {
  "id": 32,
  "name": "Benedick",
  "age": 28
}, {
  "id": 33,
  "name": "Brynn",
  "age": 44
}, {
  "id": 34,
  "name": "Clemmie",
  "age": 59
}, {
  "id": 35,
  "name": "Joletta",
  "age": 38
}, {
  "id": 36,
  "name": "Bradan",
  "age": 37
}, {
  "id": 37,
  "name": "Konstantine",
  "age": 22
}, {
  "id": 38,
  "name": "Goldy",
  "age": 49
}, {
  "id": 39,
  "name": "Corbet",
  "age": 43
}, {
  "id": 40,
  "name": "Shawn",
  "age": 57
}, {
  "id": 41,
  "name": "Giovanni",
  "age": 57
}, {
  "id": 42,
  "name": "Glen",
  "age": 63
}, {
  "id": 43,
  "name": "Marni",
  "age": 38
}, {
  "id": 44,
  "name": "Sayers",
  "age": 68
}, {
  "id": 45,
  "name": "Den",
  "age": 34
}, {
  "id": 46,
  "name": "Murray",
  "age": 49
}, {
  "id": 47,
  "name": "Cristobal",
  "age": 43
}, {
  "id": 48,
  "name": "Hershel",
  "age": 57
}, {
  "id": 49,
  "name": "Bogey",
  "age": 21
}, {
  "id": 50,
  "name": "Cam",
  "age": 30
}, {
  "id": 51,
  "name": "Berrie",
  "age": 41
}, {
  "id": 52,
  "name": "Rosamond",
  "age": 49
}, {
  "id": 53,
  "name": "Melisa",
  "age": 53
}, {
  "id": 54,
  "name": "Pearle",
  "age": 34
}, {
  "id": 55,
  "name": "Finley",
  "age": 42
}, {
  "id": 56,
  "name": "Husain",
  "age": 29
}, {
  "id": 57,
  "name": "Burr",
  "age": 41
}, {
  "id": 58,
  "name": "Hertha",
  "age": 60
}, {
  "id": 59,
  "name": "Stanford",
  "age": 28
}, {
  "id": 60,
  "name": "Marcellina",
  "age": 69
}, {
  "id": 61,
  "name": "Denny",
  "age": 43
}, {
  "id": 62,
  "name": "Anitra",
  "age": 19
}, {
  "id": 63,
  "name": "Leroy",
  "age": 16
}, {
  "id": 64,
  "name": "Luella",
  "age": 27
}, {
  "id": 65,
  "name": "Cristiano",
  "age": 61
}, {
  "id": 66,
  "name": "Karlens",
  "age": 21
}, {
  "id": 67,
  "name": "Elset",
  "age": 65
}, {
  "id": 68,
  "name": "Lennie",
  "age": 54
}, {
  "id": 69,
  "name": "Eada",
  "age": 62
}, {
  "id": 70,
  "name": "Denyse",
  "age": 62
}, {
  "id": 71,
  "name": "Kassia",
  "age": 30
}, {
  "id": 72,
  "name": "Guthrie",
  "age": 24
}, {
  "id": 73,
  "name": "Trent",
  "age": 63
}, {
  "id": 74,
  "name": "Brander",
  "age": 46
}, {
  "id": 75,
  "name": "Marie-jeanne",
  "age": 65
}, {
  "id": 76,
  "name": "Johnath",
  "age": 36
}, {
  "id": 77,
  "name": "Marcile",
  "age": 38
}, {
  "id": 78,
  "name": "Kermy",
  "age": 58
}, {
  "id": 79,
  "name": "Boyd",
  "age": 28
}, {
  "id": 80,
  "name": "Reena",
  "age": 43
}, {
  "id": 81,
  "name": "Mortie",
  "age": 60
}, {
  "id": 82,
  "name": "Gwenni",
  "age": 41
}, {
  "id": 83,
  "name": "Rhoda",
  "age": 69
}, {
  "id": 84,
  "name": "Bone",
  "age": 62
}, {
  "id": 85,
  "name": "Laird",
  "age": 35
}, {
  "id": 86,
  "name": "Octavia",
  "age": 34
}, {
  "id": 87,
  "name": "Geoffry",
  "age": 42
}, {
  "id": 88,
  "name": "Norby",
  "age": 65
}, {
  "id": 89,
  "name": "Trish",
  "age": 69
}, {
  "id": 90,
  "name": "Ricca",
  "age": 19
}, {
  "id": 91,
  "name": "Gilberto",
  "age": 53
}, {
  "id": 92,
  "name": "Terrance",
  "age": 53
}, {
  "id": 93,
  "name": "Justine",
  "age": 22
}, {
  "id": 94,
  "name": "Valeda",
  "age": 50
}, {
  "id": 95,
  "name": "Brucie",
  "age": 26
}, {
  "id": 96,
  "name": "Murial",
  "age": 56
}, {
  "id": 97,
  "name": "Brennen",
  "age": 23
}, {
  "id": 98,
  "name": "Camille",
  "age": 45
}, {
  "id": 99,
  "name": "Abby",
  "age": 33
}, {
  "id": 100,
  "name": "Jerrie",
  "age": 62
}]

export default function App() {
  
  const [users, setUsers] = useState(
    {
      original: original,
      filtered: original
    }
  )
  const [currentId, setCurrentId] = useState(null)
  const [age, setAge] = useState(0)

  const maxAge =() =>{
    let max = -Infinity
    users.original.map(user => {
      if(max < user.age){
        max = user.age
      }else{
        max = max
      }
    })
    return max
  }

  const minAge =() =>{
    let min = Infinity
    users.original.map(user => {
      if(min > user.age){
        min = user.age
      }else{
        min = min
      }
    })
    return min
  }

  const handleChange =(e) =>{
    setAge(+e.target.value)
    if(currentId){
      clearTimeout(currentId)
    }
    const interval = setTimeout(() => {
      setUsers({
        ...users, 
        filtered: users.original.filter(user => user.age <= +e.target.value)
      })
    }, 1000);
    setCurrentId(interval)  
  }

  return (
    <div className='Container'>
      <h1>{age}</h1>
      <input type="range" name="age" id="age" min ={minAge()} max ={maxAge()} value={age} onChange={handleChange}/>
      <Users users = {users}/>
    </div>
  )
}
