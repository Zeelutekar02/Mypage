import axios from "axios";
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";


const ExDeleteupdate = () => {
    
    const [list, setList] = useState([])
    let token = "NhQlxpZeIkZIvU6G"
    const [ini, setIni] = useState({
        Name:"",
        Surname:"",
        DOB:"",
        Age:"",
        Gender:"",
        Address:"",
        MobileNo:"",
        EmailID:""
    })

    const [editId, setEditId] = useState(null)

    useEffect(() =>{
        data()
    }, [])   

    function data()
    {
        axios.get('https://generateapi.techsnack.online/api/MyAPI', {
            headers :{
                Authorization : token
            }
        })
        .then((res) =>{
            setList(res.data.Data)
            console.log(res.data.Data)
        })
        .catch((error) =>{
            console.log(error);
         })
    }

    const handleSubmit = (values, {resetForm}) =>{
        console.log(values);
        
        const {_id, ...rest} = values

        if(editId != null)
        {   
            axios.patch(`https://generateapi.techsnack.online/api/MyAPI/${editId}`, rest, {
                headers :{
                    Authorization : token
                }
            })
            .then(() =>{
                console.log("Data Update Success");
                data()
                setIni({
                    Name:"",
                    Surname:"",
                    DOB:"",
                    Age:"",
                    Gender:"",
                    Address:"",
                    MobileNo:"",
                    EmailID:""
                })
            })
            .catch((error) =>{
                console.log(error);
            })
        }
        else
        {
            axios.post('https://generateapi.techsnack.online/api/MyAPI', values,{
                headers :{
                    Authorization : token
                }
            })
            .then(() =>{
                console.log("Data enter success");
                data()
            })
            .catch((error) =>{
                console.log(error);
            })
        }
        resetForm()
    }

    const deleteData = (id) =>{   
        axios.delete(`https://generateapi.techsnack.online/api/MyAPI/${id}`, {
            headers :{
                Authorization : token
            }
        })
        .then(() =>{
            console.log("Data Delete Success");
            data()
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
                <Field name="Name"></Field>
                <br></br>
                <Field name="Surname"></Field>
                <br></br>
                <Field name="DOB"></Field>
                <br></br>
                <Field name="Age"></Field>
                <br></br>
                <Field name="Gender"></Field>
                <br></br>
                <Field name="Address"></Field>
                <br></br>
                <Field name="MobileNo"></Field>
                <br></br>
                <Field name="EmailID"></Field>
                <br></br>
                <button type="submit">SUBMIT</button>
            </Form>
        </Formik>

        <table border={1}>
            <thead style={{border:"1px solid"}}>
                <tr>
                    <td style={{border:"1px solid"}}>NAME</td>
                    <td style={{border:"1px solid"}}>SURNAME</td>
                    <td style={{border:"1px solid"}}>DOB</td>
                    <td style={{border:"1px solid"}}>AGE</td>
                    <td style={{border:"1px solid"}}>GENDER</td>
                    <td style={{border:"1px solid"}}>ADDRESS</td>
                    <td style={{border:"1px solid"}}>MOBILE-NO</td>
                    <td style={{border:"1px solid"}}>EMAIL-ID</td>
                    <td style={{border:"1px solid"}}>DELETE</td>
                    <td>UPDATE</td>
                </tr>
            </thead>
            <tbody style={{border:"1px solid"}}>
                {
                    list.map((i, index) =>(
                        <tr key={index}>
                            <td style={{border:"1px solid"}}>{i.Name}</td>
                            <td style={{border:"1px solid"}}>{i.Surname}</td>
                            <td style={{border:"1px solid"}}>{i.DOB}</td>
                            <td style={{border:"1px solid"}}>{i.Age}</td>
                            <td style={{border:"1px solid"}}>{i.Gender}</td>
                            <td style={{border:"1px solid"}}>{i.Address}</td>
                            <td style={{border:"1px solid"}}>{i.MobileNo}</td>
                            <td style={{border:"1px solid"}}>{i.EmailID}</td>
                            <td style={{border:"1px solid"}}>
                                <button onClick={() =>deleteData(i._id)}>DELETE</button>
                            </td>
                            <td style={{border:"1px solid"}}>
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

export default ExDeleteupdate
