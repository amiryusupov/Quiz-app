import Page from '@/components/layout'
import React from 'react'
import { useSelector } from 'react-redux'

function result() {
  const {answers, quizList} = useSelector((state) => state.quiz)
  return (
    <Page>
      <div className="cotainer">
        {
          quizList.map((item, index) => {
            <div key={index}>
              <span>{index}</span>
              <span>{item.question}</span>
              <span>{answers[index].value}</span>
              <span>{item.correct_answer === answers[index].value ? "True" : "False"}</span>
            </div>
          })
        }
      </div>
    </Page>
    
  )
}

export default result