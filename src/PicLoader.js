import { useEffect, useState } from "react"
import {pics} from "./Constants.js"

const PicLoader=()=>{
    const [activeImageIndex, setActiveImageIndex]= useState(0)
    const handleNext=()=>{
        (activeImageIndex===pics.length-1?setActiveImageIndex(0):setActiveImageIndex(activeImageIndex+1))
    }
    const handlePrevious=()=>{
        (activeImageIndex===0?setActiveImageIndex(pics.length-1):setActiveImageIndex(activeImageIndex-1))
    }

    useEffect(()=>{
        let timer=setTimeout(()=>{
            handleNext()
        },3000)
        clearTimeout(timer)
    },[activeImageIndex])
    return(
        <>
        <div className="flex justify-center">
            <button className="font-bold p-4 m-10" onClick={handlePrevious}>Previous</button>
            {pics.map((url,index)=>(
                <img key={url} className={"w-[700px] h-[500px] object-contain " +(activeImageIndex===index?"block":"hidden")} src={url} alt="wallpaper" />
            ))}
            
            <button className="font-bold p-4 m-10" onClick={handleNext}>Next</button>
        </div>
        </>
    )
}

export default PicLoader