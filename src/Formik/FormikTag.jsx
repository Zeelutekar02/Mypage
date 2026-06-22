import React, {useState} from 'react'
import {Field, Form, Formik} from 'formik'

const FormikTag = () => {

    const [ini, setIni] = useState({
        name:"",
        surname:""
    })

    const [list, setList] = useState([])

    const handleSubmit =(values, {resetForm}) =>{
        setList(...list, values)
        resetForm()
    }
    return (
        <>
        <div>
        <Formik
        initialValues={ini}
        onSubmit={handleSubmit}
        >
            <Form>
                <Field type="" name="name"></Field> 
                <br></br>
                <Field name="surname"></Field>
                <br></br>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>

        <table border={1}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i, index)=>(
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
export default FormikTag