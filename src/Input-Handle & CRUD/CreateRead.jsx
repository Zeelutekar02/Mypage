import React, {useState} from 'react'
const CreateRead = ()=>{

    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')

    const[list , setList] = useState([])

    const handleSubmit = ()=>{
        // console.log(name);
        // console.log(surname);

        const obj ={name,surname}
        
        setList([...list, obj])

        setName('')
        setSurname('')
    }
    return(
        <>
        <div>
        <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} value={name} />
        <br /><br />
        <input type="text" name="" id="" onChange={(e) => setSurname(e.target.value)} value={surname} />
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>

        <table border={1}>
            <thead>
                  <tr>
                      <td>Name</td>
                      <td>Surname</td>
                  </tr>
            </thead>
            <tbody>
                  {
                      list.map((i, index) => (
                          <tr key={index}>
                              <td>{i.name}</td>
                              <td>{i.surname}</td>
                          </tr>
                      ))
                  }
            </tbody>
        </table>

            </div>
        </>
    )
}
export default CreateRead