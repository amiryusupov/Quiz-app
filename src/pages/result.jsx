import Page from '@/components/layout'
import React from 'react'
import { useSelector } from 'react-redux'

function result() {
  const {answers, quizList, quizLength} = useSelector((state) => state.quiz)
  const results = quizList.map((item, index) => (
    item.correct_answer === answers[index].id ? "True" : "False"
  ))
  const overall = results.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {})
  console.log(overall);
  return (
    <Page>
      <div className="container">
        <span>Overall. Correct: {overall.True ? overall.True : "0"}/{quizLength+1}</span>
        {
          quizList.map((item, index) => (
            <div key={index}>
              <span>{index + 1}. </span>
              <span dangerouslySetInnerHTML={{__html: item.question}}/>
              <br />
              <span>Your answer: {answers[index].id}</span>
              <blockquote></blockquote>
              <span>{item.correct_answer === answers[index].id ? "True" : `False. Answer: ${item.correct_answer}`}</span>
            </div>
          ))
        }
      </div>
    </Page>
    
  )
}

export default result