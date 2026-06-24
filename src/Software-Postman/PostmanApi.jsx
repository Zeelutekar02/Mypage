import axios from "axios";
import {Field, Form, Formik} from 'formik'
import React, {useEffect, useState} from "react"



const PostmanApi = () => {

    const [list, setList] = useState([])
    let token = "NhQlxpZeIkZIvU6G"
    const [ini, setIni] = useState({
        title:"",
        body:""
    })

    useEffect(() =>{
        dataView()
    }, [])

    function dataView() 
    {
        axios.get('https://generateapi.techsnack.online/api/Mypage', {
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

        axios.post('https://generateapi.techsnack.online/api/Mypage', values,{
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
                    <Field name="title"></Field>
                    <br></br>
                    <Field name="body"></Field>
                    <br></br>
                    <button type="submit">SUBMIT</button>
                </Form> 
            </Formik>

            <table style={{border:'1px solid'}}>
                <thead style={{border:'1px solid'}}>
                    <tr >
                        <th style={{border:'1px solid'}}>TITLE</th>
                        <th>BODY</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        list.map((i, index) =>(
                            <tr key={index}> 
                                <td style={{border:'1px solid'}}>{i.title}</td>
                                <td style={{border:'1px solid'}}>{i.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default PostmanApi
