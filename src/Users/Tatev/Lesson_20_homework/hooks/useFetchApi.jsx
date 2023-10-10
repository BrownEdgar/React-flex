import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


export default function useFetchApi(url) {
  const [photos, setPhotos] = useState([])
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setIsPending(true)
    axios(url)
      .then(res => setPhotos(res.data))
      .finally(() => setIsPending(false))
  }, [url])
  
  return {photos, isPending}
}
