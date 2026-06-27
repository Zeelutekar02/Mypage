import axios from "axios";
import {Field, Form, Formik} from 'formik'
import React, {useEffect, useState} from "react"



const PostmanApi2 = () => {

    const [list, setList] = useState([])
    let token = "NhQlxpZeIkZIvU6G"
    const [ini, setIni] = useState({
        Age:"",
        Gender:""
    })

    useEffect(() =>{
        dataView()
    }, [])

    function dataView()
    {
        axios.get('https://generateapi.techsnack.online/api/Mycollection',{
            headers :{
                Authorization : token
            }
        })
        .then((res) =>{
            console.log(res.data.Data)
            setList(res.data.Data)
        })
        .catch((error) =>{
            console.log(error);
        }) 
    }

    const handleSubmit = (values, {resetForm}) =>{
        console.log(values);

        axios.post('https://generateapi.techsnack.online/api/Mycollection', values,{
            headers :{
                Authorization : token
            }
        })
        .then(() =>{
            console.log("Data enter success");
            resetForm()
            dataView()
        })
        .catch((error) =>{
            console.log(error);
        })
    } 
  return (
    <div>
        <Formik initialValues={ini} onSubmit={handleSubmit}>
            <Form>
                <Field name="Age"></Field>
                <br></br>
                <Field name="Gender"></Field>
                <br></br>
                <button type="submit">SUBMIT</button>
            </Form>
        </Formik>

        <table style={{border:'1px dashed'}}>
            <thead style={{border:"1px dashed"}}>
                <tr>
                    <th style={{border:"1px dashed"}}>AGE</th>
                    <th>GENDER</th>
                    {/* <th>Date of birth</th> */}
                    {/* <th>password</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i, index) =>(
                        <tr key={index}>
                            <td style={{border:"1px dashed"}}>{i.Age}</td>
                            <td style={{border:"1px dashed"}}>{i.Gender}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default PostmanApi2
