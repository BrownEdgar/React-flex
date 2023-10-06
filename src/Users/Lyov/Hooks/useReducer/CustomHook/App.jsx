// import useCustomHook from "./CustomHook"




// export default function App() {
  //   const [value, { minus, plus }, setValue] = useCustomHook(0)
  
  
  //   return (
    //     <div>
//       <h1>Value:{value}</h1>
//       <button onClick={minus}>-</button>
//       <button onClick={() => setValue(value + 3)}>+</button>
//     </div>
//   )
// }

import useFetchApi from "./useFetchApi"


export default function App() {
  const [posts, error] = useFetchApi('https://jsonplaceholder.typicode.com/posts')


  return (
    <div>
      <pre>Value: {
        JSON.stringify(posts, null, 1)}
        </pre>

        <pre>
          {JSON.stringify(error, null, 1)}
        </pre>
    </div>
  )
}

