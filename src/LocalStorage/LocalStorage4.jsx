import React from 'react'

const LocalStorage4 = () => {
    
    const call = localStorage.getItem('data')
    localStorage.removeItem('data')                                                                                                                                                                                                                                
  return (
    <div>
        <h1>{call}</h1>
    </div>
  )
}

export default LocalStorage4
