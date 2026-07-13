import React, { useCallback, useMemo, useState } from 'react'


const Button= React.memo(({value}) =>{
    return <button onClick={value}>CLICK</button>
})
const UseCallback = () => {

    const [no, setNo] = useState(0)
    const count = useCallback(() =>{
        setNo(no+1)
    })
    
  return (
    <div>
        <h1>{no}</h1>
        <Button value={count}></Button>
    </div>
  )
}

export default UseCallback
