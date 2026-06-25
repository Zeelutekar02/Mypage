import React, {useContext} from "react"
import {CounterContext} from './UseContext'

const Secondfile = () =>{

    const {no, increment, decrement} = useContext(CounterContext)
    return(
        <>
            <div>
                <h1>{no}</h1>
            </div>
        </>
    )
}
export default Secondfile