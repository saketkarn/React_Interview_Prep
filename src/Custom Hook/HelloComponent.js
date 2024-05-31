import React from 'react'
import useHello from './useHello'
const HelloComponent = () => {
    const message = useHello()
  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default HelloComponent
