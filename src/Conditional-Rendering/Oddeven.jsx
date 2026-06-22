import React, { useState } from 'react'
const Oddeven = ()=>{

    const Odd = () => {
    return(
        <>
            <h2>This is Odd</h2>
        </>
    )
}

const Even = () => {
    return (
        <>
            <h2>This is Even</h2>
        </>
    )
}

    const [no, setNo] = useState(0)

    return(
        <>
           <div>
            <h1>{no}</h1>
            {
                (no % 2 == 0) ? <Even /> : <Odd />
            }
            <button onClick={() => setNo(no + 1)}>CLICK</button>
        </div> 
        </>
    )
}
export default Oddeven