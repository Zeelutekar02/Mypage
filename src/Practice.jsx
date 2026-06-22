import React, {useState} from 'react'
const Practice = ()=>{

    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')

    const[list, setList] = useState([])

    const handleSubmit = ()=>{
        const obj ={name, surname}
        setList([...list, obj])

        setName('')
        setSurname('')
    
    }
    return(
        <>
            <div>
                <input type='' name='name' id='' onChange={(e) =>setName(e.target.value)} value={name} />
                <br></br>
                <input type='' name='surname' id='' onChange={(e) =>setSurname(e.target.value)} value={surname} />
                <br></br>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}
export default Practice