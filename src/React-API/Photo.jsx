import axios from "axios";
import React, {useEffect, useState} from "react";

const Photo = ()=>{

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://jsonplaceholder.typicode.com/photos')
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
            <table border={1}>
                <thead>
                    <tr>
                        <th>ALBUMID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>URL</th>
                        <th>THUMBNAILURL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) =>(
                            <tr key={index}>
                                <td>{i.albumId}</td>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.url}</td>
                                <td>{i.thumbnailUrl}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default Photo