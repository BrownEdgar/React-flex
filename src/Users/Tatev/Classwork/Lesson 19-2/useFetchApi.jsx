import { useState, useEffect } from 'react';


export default function useFetchApi(ferchUrl) {
  const [data, setData] = useState(null);
  const [error, setError] = useState({ message: '', hasError: false })
  const [isPending, setisPending] = useState(false)

  useEffect(() => {
    setisPending(true)
    fetch(ferchUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('invalid url please check it!')
      })
      .then(data => setData(data))
      .catch(err => setError({ hasError: true, message: err.message }))
      .finally(() => setisPending(false))
  }, [ferchUrl])

  return [data, isPending, error]
}
