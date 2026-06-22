import React, {useState} from 'react'
const UpdateDelete = ()=>{

    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')

    const[list, setList] = useState([])
    const[editId, setEditId] = useState(null)
    const handleSubmit = ()=>{
        const obj ={name,surname}

        if(editId != null)
        {
            let copyData = [...list]
            copyData[editId] = obj
            setList(copyData)
            setEditId(null)
        }
        else
        {
            setList([...list, obj])
        }

        setName('')
        setSurname('')
    }
    const deleteData =(index)=>{
        let copyData = [...list]
        copyData.splice(index, 1)
        setList(copyData)
    }

    const updateData = (item, index)=>{
        setName(item.name)
        setSurname(item.surname)
        setEditId(index)
    }
    return(
        <>
            <input type='text' name='' id='' onChange={(e) =>setName(e.target.value)} value={name}></input>
            <br></br><br></br>
            <input type='text' name='' id='' onChange={(e) =>setSurname(e.target.value)} value={surname}></input>
            <br></br><br></br>
            <button onClick={handleSubmit}>Submit</button>

            <table border={1}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>UPDATE</td>
                        <td>DELETE</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index)=>(
                            <tr key={index}>
                                <td>{i.name}</td>
                                <td>{i.surname}</td>
                                <td>
                                    <button onClick={() =>deleteData(index)}>DELETE</button>
                                </td>
                                <td>
                                    <button onClick={() =>updateData(i, index)}>UPDATE</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default UpdateDelete