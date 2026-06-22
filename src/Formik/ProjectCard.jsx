import React, { useState } from "react";
import {Field, Form, Formik} from 'formik'
import { useFormik } from "formik";
import './ProjectCard.css';

const ProjectCard = () =>{

    const [list, setList] = useState([]);

    const formik = useFormik({
        initialValues:{
            name:"",
            price:"",
            description:"",
            image:"",
        },

        onSubmit: (values, {resetForm})=>{
            setList([...list, values]);
            resetForm();
        }
    });
    return(
        <>
            <div className="container">
                <h1 className="product-card">Product-Card</h1>
                <Formik
                initialValues={{ name: "" }}
                onSubmit={(values) => console.log(values)}
                >
                <form onSubmit={formik.handleSubmit}>
                    <Field type="text" name="name" placeholder="Enter Name" value={formik.values.name} onChange={formik.handleChange}></Field><br></br>
                    <Field type="text" name="price" placeholder="Enter Price" value={formik.values.price} onChange={formik.handleChange}></Field><br></br>
                    <Field type="" name="description" placeholder="Enter Description" value={formik.values.description} onChange={formik.handleChange}></Field><br></br>
                    <Field type="" name="image" placeholder="Enter Image URL" value={formik.values.image} onChange={formik.handleChange}></Field><br></br>
                    
                    <button type="submit">SUBMIT</button>
                </form>
                </Formik>
                <div className="cards">
                    {list.map((i, index)=>(
                        <div className="card" key={index}>
                            <img src={i.image} alt={i.name} />
                            <h2>{i.name}</h2>
                            <h2>₹ {i.price}</h2>
                            <p>{i.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ProjectCard