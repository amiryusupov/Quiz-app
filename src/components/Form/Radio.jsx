import React from 'react'

function Radio({ data, question, key }) {
  console.log(question)
  return (
    <div className="flex flex-col items-center justify-between border w-[60%] pt-8 h-[40%] shadow-lg rounded">
      <span className='text-center text-lg px-5'>{question}</span>
      <div className="flex flex-col items-start">
        <label htmlFor='answer' className='flex text-lg mb-2'>
          <input className="mr-2 accent-sky-500 border-s-transparent" type="radio" name="answer" id="answer1" />
          answer1asdfasdf
        </label>
        <label htmlFor='answer' className='flex text-lg mb-2'>
          <input className="mr-2" type="radio" name="answer" id="answer2" />
          answer2asdfadsfadsf
        </label>
        <label htmlFor='answer' className='flex text-lg mb-2'>
          <input className="mr-2" type="radio" name="answer" id="answer3" />
          answer3asdfasdfasd
        </label>
        <label htmlFor='answer' className='flex text-lg mb-2'>
          <input className="mr-2" type="radio" name="answer" id="answer4" />
          answer4adsfasdf
        </label>
      </div>
      <div className="flex w-full justify-between mt-5">
        <button disabled={0} className='flex-1 bg-sky-500 text-white py-5 hover:bg-sky-600 rounded-bl'>Previous</button>
        <button className='flex-1 bg-sky-500 text-white py-5 hover:bg-sky-600 rounded-br'>Next</button>
      </div>
    </div>
  )
}

export default Radio;