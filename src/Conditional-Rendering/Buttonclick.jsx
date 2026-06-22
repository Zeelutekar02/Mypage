import React, {useState} from 'react'
const Buttonclick = ()=>{
   
    const [no, setNo] = useState(0)
    return(
        <>
            <div>
                <button onClick={() =>setNo(no+1)}>CLICK</button>
            </div>
        </>
    )
}
export default Buttonclick