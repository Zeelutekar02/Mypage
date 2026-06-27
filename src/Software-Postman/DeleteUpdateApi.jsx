import axios from "axios";
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";

// HLno9t7VdfpkbsXs

const DeleteUpdateApi = () => {

    const [list, setList] = useState([])
    let token = "NhQlxpZeIkZIvU6G"
    const [ini, setIni] = useState ({
        Age:"",
        Gender:""  
    })

    const [editId, setEditId] = useState(null)

    useEffect(() =>{ 
        apiCalling()
    }, [])

    function apiCalling() 
    {
        axios.get('https://generateapi.techsnack.online/api/Mycollection', {
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

        const {_id, ...rest}= values

        if(editId != null)
        {
            axios.patch(`https://generateapi.techsnack.online/api/Mycollection/${editId}`, rest, {
                headers :{
                    Authorization : token
                }
            })
            .then(() =>{
                console.log("Data Update success");
                apiCalling()
                setIni({
                    Age:"",
                    Gender:""
                })
            })
            .catch((error) =>{
                console.log(error);
            })
        }
        else
        {
              axios.post('https://generateapi.techsnack.online/api/Mycollection', values,{
            headers :{
                Authorization : token
            }
        })
        .then(() =>{
            console.log("Data enter success");
            
            apiCalling()
        })
        .catch((error) =>{
            console.log(error);
        })
        }
        resetForm()

        }

    const deleteData = (id) =>{
        axios.delete(`https://generateapi.techsnack.online/api/Mycollection/${id}`, {
            headers :{
                Authorization : token
            }
        })
        .then(() =>{
            console.log("Data delete success")
            apiCalling()
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    const updateData = (i) =>{
        setIni(i)
        setEditId(i._id)
    }
    
  return (
    <div>
            <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
                <Form>
                    <Field name="Age"></Field>
                    <br></br>
                    <Field name="Gender"></Field>
                    <br></br>
                    <button type="submit">SUBMIT</button>
                </Form>
            </Formik>

            <table border={1}>
                <thead style={{border:"1px solid"}}>
                    <tr>
                        <td style={{border:"1px solid"}}>Age</td>
                        <td style={{border:"1px solid"}}>Gender</td>
                        <td style={{border:"1px solid"}}>DELETE</td>
                        <td>UPDATE</td>
                    </tr>
                </thead>
                <tbody style={{border:"1px solid"}}>
                    {
                        list.map((i, index) =>(
                            <tr key={index} style={{border:"1px solid"}}>
                                <td style={{border:"1px solid"}}>{i.Age}</td>
                                <td style={{border:"1px solid"}}>{i.Gender}</td>
                                <td style={{border:"1px solid"}}>
                                    <button onClick={() =>deleteData(i._id)}>DELETE</button>
                                </td>
                                <td>
                                    <button onClick={() =>updateData(i)}>UPDATE</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default DeleteUpdateApi
