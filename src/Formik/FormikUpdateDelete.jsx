import React, {useState} from 'react'
import {Field, Form, Formik} from 'formik'
import { RxValue } from 'react-icons/rx'

const FormikUpdateDelete = () =>{

    const [ini, setIni] = useState({
        name:"",
        surname:""
    })

    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)
    const handleSubmit =(values, {resetForm}) =>{
        SetList([...list, values])
        resetForm()
    }

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
        <Formik 
        initialValues={ini}
        onSubmit={handleSubmit}>
            <Form>
                <Field type="" name="name"></Field><br></br>
                <Field type="" name="surname"></Field><br></br>
                <button type='submit'>Submit</button>
            </Form>
            </Formik>

            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>UPDATE</td>
                    <td>DELETE</td>
                </tr>
                {
                    list.map((i, index)=>(
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                            <td>
                                <button onClick={() =>deleteData(index)}>DELETE</button>
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
export default FormikUpdateDelete