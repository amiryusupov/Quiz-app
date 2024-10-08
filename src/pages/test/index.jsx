import Radio from "@/components/Form/Radio";
import Page from "@/components/layout";
import { shuffleArr } from "@/helpers/helpers";
import { setAnswers } from "@/redux/slices/QuizSlice";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Test() {
  const router = useRouter();
  let [count, setCount] = useState(0);
  const dispatch = useDispatch()
  const form = useRef()
  const { quizList, loading, answers: newAnswers, quizLength } = useSelector((state) => state.quiz)
  console.log("QuizList: ", quizList);
  const answers = quizList[count]?.incorrect_answers
  ? shuffleArr([...quizList[count].incorrect_answers, quizList[count].correct_answer])
  : [];
  const handleSubmit = (e) => {
    e.preventDefault()
    let answer = {
      id: count
    }
    for (let i = 0; i < answers.length; i++) {
      if (e.target.elements[i].checked) {
        answer.id = e.target.elements[i].value
        e.target.elements[i].checked = false
      }
    }
    console.log("Answers: ", typeof answer.id)
    if(typeof answer.id !== "string") {
      return alert("Tanla axir!")
    }
    dispatch(setAnswers(answer))
    if (count === quizLength) {
      router.push({ pathname: "/result" })
    }
    else {
      setCount(count + 1)
    }
  }
  const prevButtonClick = () => {
    console.log(answers);
    const { current } = form
    const { elements } = current
    for (let i = 0; i < answers.length; i++) {
      if (elements[i].value == answers[count]) {
        elements[i].checked = true 
      }
    }
    setCount(count - 1)
  }
  useEffect(() => {
    window.onbeforeunload = () =>
      "If you leave your data have been cleared"
  }, [])
  return (
    <Page>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex items-center w-full h-full justify-center">
          <div className="flex flex-col items-center justify-between border w-[70%] m-h-[55%] shadow-lg rounded">
            <div className="w-full  text-center bg-sky-500 text-xl py-3 text-white">Question #{count + 1}</div>
            <div className="w-full flex flex-col items-center min-h-[15vw] justify-between pt-[20px]">
              <span className='text-center text-lg px-5 mb-5' dangerouslySetInnerHTML={{ __html: quizList[count]?.question }}></span>
              <form className="w-full flex flex-col items-center" ref={form} onSubmit={handleSubmit}>
                <Radio
                  data={answers}
                />
                <div className="flex w-full justify-between mt-5">
                  {count > 0 && <button
                    disabled={0}
                    onClick={prevButtonClick}
                    className="flex-1 bg-sky-500 text-white py-5 hover:bg-sky-600 rounded-bl"
                  >Previous</button>}
                  <button type="submit" className="flex-1 bg-sky-500 text-white py-5 hover:bg-sky-600 rounded-br">
                    {count === quizLength ? "Finish" : "Next"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Page>
  );
}

export default Test;
