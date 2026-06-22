import React from 'react'

const LocalStorage2 = () => {
    
    const test = localStorage.getItem('data')

    // localStorage.removeItem('data')
  return (
    <div>
        <h1>{test}</h1>
    </div>
  )
}

export default LocalStorage2
