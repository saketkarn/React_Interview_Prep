import React from 'react'

const Child = (props) => {
  return (
    <div>
      I'm a Child
      <button onClick={()=>
        props.setX("Parent 2")
      }>Click me!</button>
    </div>
  )
}

export default Child