import axios from "axios";
import React, {useEffect, useState} from "react";

const User = () =>{

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) =>{
            setList(res.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    useEffect(() =>{
        dataView()
    }, [count])
    return(
        <>
            <button onClick={() => setCount (count + 1)}>CLICK</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>ADDRESS</th>
                        <th>GEO</th>
                        <th>PHONE</th>
                        <th>WEBSITE</th>
                        <th>COMPANY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) =>(
                            <tr key={index}>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.username}</td>
                                <td>{i.email}</td>
                                <td>{i.address}</td>
                                <td>{i.geo}</td>
                                <td>{i.phone}</td>
                                <td>{i.website}</td>
                                <td>{i.company}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default User