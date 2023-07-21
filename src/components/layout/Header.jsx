import React, { useMemo } from 'react'
import { Select } from '..'
import useFetch from '@/hooks/useFetch'
import { categoriesUrl } from '@/helpers/urls'

function Header() {
  const { data, loading } = useFetch(categoriesUrl)
  const categories = useMemo(() => {
    return data === null ? [] : data?.trivia_categories?.map((item) => ({ label: item.name, value: item.id }))
  }, [data])
const difficultyOptions = [
  {
    label: "Easy",
    value: "easy"
  },
  {
    label: "Medium",
    value: "medium"
  },
  {
    label: "Hard",
    value: "hard"
  },
]
const typeData = [
  {
    label: "Multiple/choice",
    value: "multiple"
  },
  {
    label: "True/false",
    value: "boolean"
  },
]
return (
  <div className='container'>
    <div className='py-3 flex items-center justify-between'>
      <h1>Logo</h1>
      <div className="flex gap-4">
        <Select options={difficultyOptions} name="difficulty" />
        <Select options={typeData} name="type" />
        <Select options={categories} name="category" />
      </div>
    </div>
  </div>
)
}

export default Header