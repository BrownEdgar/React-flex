import { useState, useEffect } from 'react'

export default function useFetchApi(fetchUrl) {
  const [data, setData] = useState(null)
  const [error, setError] = useState({message: '', hasError: false})

  useEffect(() => {
    fetch(fetchUrl)
      .then(res => {
         if (res.ok) {
          setError({message: '', hasError: false})
          return res.json()  
         }
         throw new Error('Invalid Url please check it!')
        })
      .then(data => setData(data))
      .catch(err => setError({hasError: true, message: err.message}))
  }, [fetchUrl])



  return [data, error]
}
