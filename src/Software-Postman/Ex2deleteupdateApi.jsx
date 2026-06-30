import axios from "axios";
import React, {useEffect, useState} from "react";
import {Field, Formik, Form} from "formik";



const Ex2deleteupdateApi = () => {

    const [list, setList] = useState([])
    let token = "NhQlxpZeIkZIvU6G"
    const [ini, setIni] = useState({
        Name:"",
        Surname:"",
        DOB:"",
        Age:"",
        Gender:"",
        Religion:"",
        Nationality:"",
        Address:"",
        MobileNo:"",
        EmailID:""
    })

    const [editId, setEditId] = useState(null)

    useState(() =>{
        DataCalling()
    }, [])

    function DataCalling()
    {
        axios.get('https://generateapi.techsnack.online/api/Mydata', {
            headers:{
                Authorization : token
            }
        })
        .then((res) =>{
            setList(res.data.Data)
            console.log(res.data.Data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const handleSubmit = (values, {resetForm}) =>{
        console.log(values);

        const {_id, ...rest} = values

        if(editId != null)
        {
            axios.patch(`https://generateapi.techsnack.online/api/Mydata/${editId}`, rest, {
                headers:{
                    Authorization : token
                }
            })
            .then(() =>{
                console.log("Data Update Success")
                DataCalling()
                setIni({
                    Name:"",
                    Surname:"",
                    DOB:"",
                    Age:"",
                    Gender:"",
                    Religion:"",
                    Nationality:"",
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
            axios.post('https://generateapi.techsnack.online/api/Mydata', values, {
                headers:{
                    Authorization : token
                }
            })
            .then(() =>{
                console.log("Post Data enter success")
                DataCalling()
            })
            .catch((error) =>{
                console.log(error)
            })
        }
        resetForm()
    }

    const deleteData = (id) =>{
        axios.delete(`https://generateapi.techsnack.online/api/Mydata/${id}`, {
            headers:{
                Authorization : token
            }
        })
        .then(() =>{
            console.log("Delete Data Success")
            DataCalling()
        })
        .catch((error) =>{
            console.log(error)
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
                <Field name="name"></Field>
                <br></br>
                <Field name="surname"></Field>
                <br></br><Field name="dob"></Field>
                <br></br><Field name="age"></Field>
                <br></br><Field name="gender"></Field>
                <br></br><Field name="religion"></Field>
                <br></br><Field name="nationality"></Field>
                <br></br><Field name="address"></Field>
                <br></br><Field name="mobileno"></Field>
                <br></br>
                <Field name="emailid"></Field>
                <br></br>
                <button type="submit">SUBMIT</button>
            </Form>
        </Formik>

        <table border={1}>
            <thead>
                <tr>
                    <td>NAME</td>
                    <td>SURNAME</td>
                    <td>DOB</td>
                    <td>AGE</td>
                    <td>GENDER</td>
                    <td>RELIGION</td>
                    <td>NATIONALITY</td>
                    <td>ADDRESS</td>
                    <td>MOBILE-NO</td>
                    <td>EMAIL-ID</td>
                    <td>DELETE</td>
                    <td>UPDATE</td>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i, index) =>(
                        <tr key={index}>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                            <td>{i.dob}</td>
                            <td>{i.age}</td>
                            <td>{i.gender}</td>
                            <td>{i.religion}</td>
                            <td>{i.nationality}</td>
                            <td>{i.address}</td>
                            <td>{i.mobileno}</td>
                            <td>{i.emailid}</td>
                            <td>
                                <button onClick={() => deleteData(i._id)}>DELETE</button>
                            </td>
                            <td>
                                <button onClick={() => updateData(i)}>UPDATE</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Ex2deleteupdateApi
