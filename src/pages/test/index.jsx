import Page from '@/components/layout'
import { testUrl } from '@/helpers/urls'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'

function Test() {
  const router = useRouter()
  const [settings, setSettings] = useState({})
  const {data, loading} = useFetch(testUrl, {amount: 10, ...settings}, [settings])
  const tests = useMemo(() => {
    return data === null ? [] : data.results
  }, [data])
  useEffect(() => {
    if(typeof window !== undefined) {
      const localData = localStorage.getItem("settings")
      setSettings(JSON.parse(localData))
    }
  }, [])
  console.log(data);
  return (
    <Page>
      {
        loading ? <h1>Loading...</h1> : <div><h1>{tests[0]?.question}</h1></div>
      }
    </Page>
  )
}

export default Test