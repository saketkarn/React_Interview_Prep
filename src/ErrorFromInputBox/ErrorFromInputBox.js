import React, { useState } from 'react'
const ERR_MSG="Age must be greater than 18"

const ErrorFromInputBox = () => {
    const [age, setAge]= useState("")
    const [isError, setError]= useState(false)

    const handleAge=(e)=>{
        console.log(e.target.value)
        setError(false)
        setAge(e.target.value)

        if(e.target.value<18)
            setError(true)
    }
  return (
    <div>
      <input className='border-8' value={age} onChange={handleAge}></input>
      {isError?ERR_MSG:null}
    </div>
  )
}

export default ErrorFromInputBox
