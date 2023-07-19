import Radio from '@/components/Form/Radio'
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
        loading ? <h1>Loading...</h1> : <div className="w-full h-full flex items-center justify-center"><Radio question={data.results[0].question} data={data.results[0]}/></div>
      }
    </Page>
  )
}

export default Test