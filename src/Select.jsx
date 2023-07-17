import { useRouter } from 'next/router'
import React from 'react'

function Select({ options, name }) {
  const router = useRouter()
  const handleSelectChange = ({target}) => {
    const {value} = target
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [name]: value
      }
    })
  }
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