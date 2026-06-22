import axios from "axios";
import React, {useEffect, useState} from "react";

const Album = ()=>{

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((res) =>{
            console.log(res.data)
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
            <table border={1}>
                <thead>
                    <tr>
                        <th>USERID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) =>(
                            <tr key={index}>
                                <td>{i.userId}</td>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default Album