import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Select({ options, name }) {
  const [localData, setLocalData] = useState("")
  const router = useRouter()
  const handleSelectChange = ({target}) => {
    const {value} = target
    const obj = !!localData ? localData : {}
    obj[name] = value
    localStorage.setItem("settings", JSON.stringify(obj))
    // router.push({
    //   pathname: router.pathname,
    //   query: {
    //     ...router.query,
    //     [name]: value
    //   }
    // })
  }
  useEffect(() => {
    if(typeof window !== undefined) {
      const localData = JSON.parse(localStorage.getItem("settings"))
      setLocalData(localData)
    }
  }, [])
  if (!Boolean(options) || !Boolean(options.length)) {
    return null
  }
  return (
    <select className="border" onChange={handleSelectChange}>
      {
        options.map((item, key) => (
          <option value={item.value} key={key}>{item.label}</option>
        ))
      }
    </select>
  )
}

export default Select