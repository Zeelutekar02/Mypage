import React from 'react'
import {useState, useMemo } from "react";

const UseMemoEX = () => {

    const [no, setNo] = useState(0)

    // ----useEffect no use in useMemo beacause useEffect is no return in value----
    // useEffect(() =>){
    //     return 0;
    // }

    // ----then useMemo it returns a value----
      // Plus //
    // const z = useMemo(() =>{
    //     return no+no
    // })

      // Minus //
    const minus = useMemo(() =>{
        return no-no
    })

    // Multification //
    // const Multi = useMemo(() =>{
    //   return no*no
    // })

    // Division //
    // const Div = useMemo(() =>{
    //   return no/no
    // })
  return (
    <div>
        <h1>{no}</h1> 
        {/* <h1>{z}</h1> */}
        <h1>{minus}</h1>
        {/* <h1>{Multi}</h1> */}
        {/* <h1>{Div}</h1> */}
        <button onClick={() => setNo(no + 1)}>CLICK</button>
    </div>
  )
}

export default UseMemoEX

