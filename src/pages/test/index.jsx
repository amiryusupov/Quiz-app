import Radio from "@/components/Form/Radio";
import Page from "@/components/layout";
import { shuffleArr } from "@/helpers/helpers";
import { setAnswers } from "@/redux/slices/QuizSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Test() {
  const router = useRouter();
  let [count, setCount] = useState(0);
  const dispatch = useDispatch()
  const { quizList, loading, answers: newAnswers } = useSelector((state) => state.quiz)
  const answers = shuffleArr([...quizList[count]?.incorrect_answers, quizList[count].correct_answer])
  const handleSubmit = (e) => {
    e.preventDefault()
    let answer = {
      id: count
    }
    for (let i = 0; i < answers.length; i++) {
      if (e.target.elements[i].checked) {
        answer.id = e.target.elements[i].value
      }
    }
    dispatch(setAnswers(count))
    setCount(count + 1)
  }
  console.log(newAnswers);
  const handleNext = () => {

    if (count === 9) {
      router.push({ pathname: "/result" })
    }
    else {
      setCount(count + 1)
    }
  }
  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <Page>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex items-center w-full h-full justify-center">
          <div className="flex flex-col items-center justify-between border w-[30%] h-[40%] shadow-lg rounded">
            <div className="w-full  text-center bg-sky-500 text-xl py-3 text-white">Question #{count + 1}</div>
            <div className="flex flex-col items-center min-h-[14vw] justify-between pt-[20px] pb-[50px]">
              <span className='text-center text-lg px-5 mb-5' dangerouslySetInnerHTML={{ __html: quizList[count]?.question }}></span>
              <form className="w-full" onSubmit={handleSubmit}>
                <Radio
                  data={answers}
                />
                <div className="flex w-full justify-between mt-5">
                  <button
                    disabled={0}
                    onClick={handlePrev}
                    className="flex-1 bg-sky-500 text-white py-5 hover:bg-sky-600 rounded-bl"
                  >
                    Previous
                  </button>
                  <button type="submit" className="flex-1 bg-sky-500 text-white py-5 hover:bg-sky-600 rounded-br">
                    Next
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
