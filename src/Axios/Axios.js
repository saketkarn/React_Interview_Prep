import React, { useEffect } from 'react'
import axios from 'axios'

const Axios = () => {
    //axios using promises
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>
    //     console.log(res.data))
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // },[])



    //axios using async await
    const getApiData= async ()=>{
        try{
            const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getApiData()
    },[])


  return (
    <div>
      <h1>Axios</h1>
    </div>
  )
}

export default Axios
