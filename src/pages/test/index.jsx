import Page from '@/components/layout'
import { testUrl } from '@/helpers/urls'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'
import React from 'react'

function Test() {
  const router = useRouter()
  const {data, loading} = useFetch(testUrl, {amount: 10, ...router.query}, [router])
  console.log(data);
  return (
    <Page>
      <div>Test</div>
    </Page>
  )
}

export default Test