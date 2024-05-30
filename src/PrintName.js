import { useState } from "react"

const Name=({firstName})=>{
    const [tempName, setTempName]= useState("Saket")
    const handleTempName =()=>{
        setTempName("Karn")
    }
    return(
    <>
    <h1 className="text-center">{tempName}</h1>
    <button onClick={handleTempName}>Click to change the name</button>
    </>
    )
}

export default Name