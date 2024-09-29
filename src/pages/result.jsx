import Page from '@/components/layout'
import { Router, useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

function Result() {
  const router = useRouter()
  const {answers, quizList, quizLength} = useSelector((state) => state.quiz)
  const results = quizList.map((item, index) => (
    item.correct_answer === answers[index].id ? "True" : "False"
  ))
  const overall = results.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {})
  const handleNavigation = () => {
    router.push({pathname: "/"})
  }
  console.log(answers);
  return (
    <Page>
      <div className="container">
      {results.length === 0 ? (
        <div>
          <h1>
          You did not complete the test
        </h1>
        <button onClick={handleNavigation}>
          Go home
        </button>
          </div>
      ) : (
        
        <div>
          <span>Overall: {overall.True ? overall.True : "0"}/{quizLength+1}</span>
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
          ))}
          </div>
      )}
      </div>
    </Page>
    
  )
}

export default Result