import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetch(url, dep = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (url !== null) {
      axios(url)
        .then(response => response.data)
        .then(json => {
          setData(json)
          setLoading(false)
        })
    }
  }, dep)
  return { data, loading }
}

export default useFetch;