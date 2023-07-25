import React from 'react'

function Radio({ data }) {
  const handleInputChange = ({target}) => {
    const {value} = target
    // console.log(value);
  }
  return (
      <div className="flex flex-col items-start pb-[3%]">
        {data.map((item, key) => (
          <div className="flex items-center mb-2" key={key}>
            <input className="accent-sky-500 border-s-transparent" type="radio" value={item} onChange={handleInputChange} name="answer" id={"answer" + key} />
            <label htmlFor={"answer" + key} className='flex text-lg px-3' dangerouslySetInnerHTML={{ __html: item }} />
          </div>
        ))}
      </div>
  )
}

export default Radio;