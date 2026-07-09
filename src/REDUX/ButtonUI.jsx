import React from "react";
import {increment, decrement} from './Slice'
import { useDispatch, useSelector } from "react-redux";



const ButtonUI = () => {

    const no =useSelector((state) =>state.counter.no)

    const dis = useDispatch()
  return (
    <div>
            <h1>{no}</h1>
            <h2>{no % 2 === 0 ? "EVEN-NUMBER" : "ODD-NUMBER"}</h2>
            <button onClick={() =>dis(increment())}>+++++</button>
            <button onClick={() =>dis(decrement(10))}>-----</button>
    </div>
  )
}

export default ButtonUI
