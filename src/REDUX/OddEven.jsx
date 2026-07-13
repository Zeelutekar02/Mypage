import React from "react";
import {increment, decrement} from './Slice'
import { useDispatch, useSelector } from "react-redux";


const ButtonUI = () => {

    const no =useSelector((state) =>state.counter.no)

    const dis = useDispatch()
    // const ALL = useDispatch()
    const Call = useDispatch
  return (
    <div>
       
            <h1>{no}</h1>
            {/* <h4>{onclick={(0 ? "")}}</h4> */}
            <h2>{no % 2 === 0 ? "EVEN-NUMBER" : "ODD-NUMBER"}</h2>
            <button onClick={() =>dis(increment())}>+++++</button>
            <button onClick={() =>dis(decrement(9))}>-----</button>
            {/* <button onClick={}></button> */}
    </div>
  )
}

export default ButtonUI
