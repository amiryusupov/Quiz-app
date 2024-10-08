import axios from 'axios'
import { useEffect, useState } from 'react'

function  useFetch(url, options = {}, dep = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (url !== null) {
      setLoading(true)
      axios.get(url, { params: options })
        .then(response => response.data)
        .then(json => {
          setData(json)
          setLoading(false)
        }).catch((error) => alert(error))
    }
  }, dep)
  return { data, loading }
}

export default useFetch;