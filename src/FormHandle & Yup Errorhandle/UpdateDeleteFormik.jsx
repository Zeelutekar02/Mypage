import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const UpdateDeleteFormik = ()=>{
    const[ini, setIni] =useState({
        name:'',
        age:''
    })
    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)

    const f = useFormik({
        enableReinitialize : true,
        initialValues : ini,
        validationSchema : Yup.object({
            name:Yup.string()
            .required('Enter name'),
            age: Yup.number()
            .required('Enter age')
        }),
        onSubmit : (values) =>{
            if(editId != null)
            {
                let copyData = [...list]
                copyData[editId] = values
                setList(copyData)
                setEditId(null)
                setIni({
                    name:'',
                    age:''
                })
            }
            else
            {
                setList([...list, values])
            }
            f.handleReset()
        }
        
    })
    const deleteData = (index) =>{
        let copyData = [...list]
        copyData.splice(index, 1)
        setList(copyData)
    }
    const editData = (i, index)=>{
        setIni(i)
        setEditId(index)
    }
    return(
        <>
            <form onSubmit={f.handleSubmit}>
                <input type='text' name='name' value={f.values.name} id='' onChange={f.handleChange} />
                {
                    f.touched.name && f.errors.name ? <p>{f.errors.name}</p> :null
                }
                <br></br>
                <input type='number' name='age' value={f.values.age} id='' onChange={f.handleChange} />
                {
                    f.touched.age && f.errors.age ? <p>{f.errors.age}</p> :null
                }
                <br></br>
                <button type='submit'>SUBMIT</button>
            </form>

            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>UPDATE</td>
                    <td>DELETE</td>
                </tr>
                {
                    list.map((i, index)=>(
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                                <button onClick={() => deleteData(index)}>DELETE</button>
                            </td>
                            <td>
                                <button onClick={() =>editData(i, index)}>UPDATE</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}
export default UpdateDeleteFormik