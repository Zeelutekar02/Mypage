import React from "react";
import {adddetail} from "./FormikSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
 

const CreatReadFormikCrud = () => {

    const student = useSelector((state) =>state.counter.student);
    const dis = useDispatch();

    const formik = useFormik({
        initialValues :{
          name:"",
          age:"",
          city:"",
        },
        
        onSubmit :(values, {resetForm}) =>{
          console.log(values);
          dis(adddetail(values));
          resetForm();
        },
    });
  return (
    <div>
          <form onSubmit={formik.handleSubmit}>
              <input type="text" name="name" value={formik.values.name} placeholder="Name" onChange={formik.handleChange}></input>
                <br></br><br></br>
              <input type="text" name="surname" value={formik.values.surname} placeholder="Surname" onChange={formik.handleChange}></input>
                <br></br><br></br>
              <input type="text" name="age" value={formik.values.age} placeholder="Age" onChange={formik.handleChange}></input>
                <br></br><br></br>
              <input type="text" name="dob" value={formik.values.dob} placeholder="DOB" onChange={formik.handleChange}></input>
                <br></br><br></br>
              <input type="text" name="gender" value={formik.values.gender} placeholder="Gender" onChange={formik.handleChange}></input>
                <br></br><br></br>
              <button type="submit">SUBMIT</button>
          </form>

          <table border={1} style={{border:"1px solid black"}}>
              <thead style={{border:"1px solid black"}}>
                  <tr>
                      <th style={{border:"1px solid black"}}>NAME</th>
                      <th style={{border:"1px solid black"}}>SURNAME</th>
                      <th style={{border:"1px solid black"}}>AGE</th>
                      <th style={{border:"1px solid black"}}>DOB</th>
                      <th style={{border:"1px solid black"}}>GENDER</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      student.map((i, index) =>(
                          <tr key={index} style={{border:"1px solid black"}}>
                              <td style={{border:"1px solid black"}}>{i.name}</td>
                              <td style={{border:"1px solid black"}}>{i.surname}</td>
                              <td style={{border:"1px solid black"}}>{i.age}</td>
                              <td style={{border:"1px solid black"}}>{i.dob}</td>
                              <td style={{border:"1px solid black"}}>{i.gender}</td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
    </div>
  )
}

export default CreatReadFormikCrud
