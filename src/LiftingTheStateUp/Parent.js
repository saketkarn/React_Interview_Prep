import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [a, setA]= useState("parent")
  return (
    <div>
    I'm a {a}
      <Child x={a} setX={setA}/>
    </div>
  )
}

export default Parent
