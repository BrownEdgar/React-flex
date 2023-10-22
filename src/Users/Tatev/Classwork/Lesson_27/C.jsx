import { useContext } from "react";
import { CountContext } from "./App"


export default function C() {
  const value = useContext(CountContext)

  return (
    <div>
      <h1>Component C</h1>
      <pre>
        {JSON.stringify(value)}
      </pre>
      <button onClick={value.addCount}>Add count</button>
    </div>
  )
}



//sa hin dzevn e
// export default function C() {

//   return (
//     <div>
//       <CountContext.Consumer>
//         {
//           (value) => {
//             return (
//               <>
//               <pre>
//                 {JSON.stringify(value)}
//               </pre>
//               <button onClick={value.addCount}>Add count</button></>
//             )
//           }
//         }
//       </CountContext.Consumer>
//     </div>
//   )
// }
