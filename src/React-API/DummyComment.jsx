import axios from "axios";
import React, {useEffect, useState} from "react";
import './Dummy.css'

const DummyComment = () =>{

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://dummyjson.com/comments')
        .then((res) =>{
            setList(res.data.comments)
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
                <h1 style={{textAlign:"center"}}>COMMENT-LIST</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"grey"}}>ID</th>
                            <th style={{backgroundColor:"grey"}}>BODY</th>
                            <th style={{backgroundColor:"grey"}}>POSTID</th>
                            <th style={{backgroundColor:"grey"}}>LIKES</th>
                            <th style={{backgroundColor:"grey"}}>USER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((i, index)=>(
                                <tr key={index}>
                                    <td>{i.id}</td>
                                    <td>{i.body}</td>
                                    <td>{i.postId}</td>
                                    <td>{i.likes}</td>
                                    <td>{i.user.id}, {i.user.username}, {i.user.fullName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default DummyComment