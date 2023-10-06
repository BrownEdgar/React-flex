import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetchApi(url) {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(false)
 
  useEffect(() => {
    setIsPending(true)
    axios(
      {url,
        params: {
          _limit: 100
        }
      }
    )
    .then(res => {
      setData(res.data)
      setIsPending(false)
    } )
  }, [url])
  

  return {data, isPending}
}

