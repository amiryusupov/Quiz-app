import Radio from '@/components/Form/Radio'
import Page from '@/components/layout'
import { testUrl } from '@/helpers/urls'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'

function Test() {
  const router = useRouter()
  const [count, setCount] = useState(0)
  const [settings, setSettings] = useState({})
  const {data, loading} = useFetch(testUrl, {amount: 10, ...settings}, [settings])
  const tests = useMemo(() => {
    return data === null ? [] : data.results
  }, [data])
  const isTestTrue = tests[count]
  useEffect(() => {
    if(typeof window !== undefined) {
      const localData = localStorage.getItem("settings")
      setSettings(JSON.parse(localData))
    }
  }, [])
  console.log(tests[count]);
  return (
    <Page>
      {
        loading ? <h1>Loading...</h1> : <div className="w-full h-full flex items-center justify-center"><Radio question={tests[count]?.question} data={isTestTrue ? [...tests[count].incorrect_answers] : <p>Loading...</p>}/></div>
      }
    </Page>
  )
}

export default Test