import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
const UseFormik = ()=>{
    const [ini , setIni] = useState({
        name : '',
        age : ''
    })

    const [list , setList] = useState([])


    const f = useFormik({
        initialValues : ini,
        validationSchema : Yup.object({
            name : Yup.string()
            .required('Enter name'),
            age : Yup.number()
            .required('Enter Age')
        }),
        onSubmit : (values) => {
            console.log(values);

            setList([...list , values])

            f.handleReset()
        }
    })
    return(
        <>
                <div>
        <form onSubmit={f.handleSubmit}>
              <input type="text" name="name" value={f.values.name} id="" onChange={f.handleChange} />
              
              {
                f.touched.name && f.errors.name ? <p>{f.errors.name}</p> : null
              }
              
              <br /><br />
              <input type="number" name="age" value={f.values.age} id="" onChange={f.handleChange} />
              
              {
                  f.touched.age && f.errors.age ? <p>{f.errors.age}</p> : null
              }

              <br /><br />
              <button type='submit'>Submit</button>
        </form>

        <table border={1}>
            <tr>
                  <td>Name</td>
                  <td>Age</td>
            </tr>
            {
                list.map((i , index) => (
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                    </tr>
                ))
            }
        </table>
    </div>
        </>
    )
}
export default UseFormik