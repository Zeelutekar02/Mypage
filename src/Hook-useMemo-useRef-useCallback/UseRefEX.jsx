import styled from '@emotion/styled';
import React from 'react'
import {useRef} from "react";


const UseRefEX = () => {
    const Ref = useRef()
    const ClickRef = useRef()

    const handleChange = () =>{
        Ref.current.style.color="purple"
    }

    const handleClick = () =>{
        // alert("button click")
        ClickRef.current.style.color="white"
        ClickRef.current.style.backgroundColor="blue"
    }   

  return (
    <div>
        <input ref={Ref} type='text' name='' placeholder='Name' id='' onChange={handleChange}></input>
        <br></br>
        <input type='text' ref={ClickRef} name='' id='' placeholder='Surname' onChange={handleChange}></input>
        <br></br>
        <button onClick={handleClick}>CLICK</button>
    </div>
  )
}

export default UseRefEX