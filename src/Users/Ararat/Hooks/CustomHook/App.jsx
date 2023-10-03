
import useFetchApi from './useFetchApi'


export default function App() {

  const [posts, isPending, error] = useFetchApi('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>

      {isPending && <h1> loading...</h1>}
      <pre>Value: {
        JSON.stringify(posts, null, 1)
      }</pre>

      <pre>
        {JSON.stringify(error, null, 1)}
      </pre>

    </div>
  )
}
