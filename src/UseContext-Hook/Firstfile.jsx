import React, {useContext} from 'react'
import { CounterContext } from "./UseContext"


const Firstfile = () => {

    const {no, increment, decrement} = useContext(CounterContext)
  
    return (
    <div>
        <h1>{no}</h1>
        <button onClick={increment}>+++++</button>
        <button onClick={decrement}>-----</button>
    </div>
  )
}

export default Firstfile
