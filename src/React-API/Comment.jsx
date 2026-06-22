import axios from "axios";
import React, {useEffect, useState} from "react";

const Comment = ()=>{

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)


    function dataView()
    {
        axios.get('https://jsonplaceholder.typicode.com/comments')
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
            <div>
                <table border={1}>
                    <thead>
                        <tr>                            
                            <th>POSTID</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((i, index)=> (
                                <tr key={index}>
                                    <td>{i.postId}</td>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.body}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Comment