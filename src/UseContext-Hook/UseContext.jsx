import React, {createContext, useState} from "react"
import Firstfile from './Firstfile'
import Secondfile from './Secondfile'


    export const CounterContext = createContext()
    const UseContext = () => {

    const [no, setNo] = useState(0)

    const increment = () =>{
        setNo (no + 2)
    }
    const decrement = () =>{
        setNo (no - 1)
    }

  return (
    <div>
            {/* For a one value */}
        {/* <CounterContext.Provider value={no}></CounterContext.Provider> */}

            {/* For a multiple value */}
            <CounterContext.Provider value={{no, increment, decrement}}>
                <Firstfile />
                <Secondfile />
            </CounterContext.Provider>
    </div>
  )
}

export default UseContext
