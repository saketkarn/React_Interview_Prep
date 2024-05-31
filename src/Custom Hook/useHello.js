import React, { useState } from 'react'

const useHello = () => {
  const [greet, setGreet]=useState("Hello from Custom Hook")
  return greet
}

export default useHello
