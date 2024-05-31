import React, { useState } from 'react'

const HigherOrderComponent = () => {
  return (
    <div>
      <HOCRed cmp={Counter}/>
    </div>
  )
}

function HOCRed(props){
    return(
        <h1 style={{backgroundColor:"red", textAlign:"center"}}><props.cmp/></h1>
    )
}
function Counter(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>Click me!</button>
        </div>
    )
}

export default HigherOrderComponent
