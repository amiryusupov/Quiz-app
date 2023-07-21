import React from 'react'

function Radio({ data, question }) {

  return (
    <div className="flex flex-col items-center h-full justify-between pt-[20px] pb-[50px]">
      <span className='text-center text-lg px-5 mb-5' dangerouslySetInnerHTML={{ __html: question }}></span>
      <div className="flex flex-col items-start">
        {data.map((item, key) => (
          <div className="flex items-center mb-2" key={key}>
            <input className="accent-sky-500 border-s-transparent" type="radio" name="answer" id={`answer ${key}`} />
            <label htmlFor={`answer ${key}`} className='flex text-lg px-3' dangerouslySetInnerHTML={{ __html: item }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Radio;