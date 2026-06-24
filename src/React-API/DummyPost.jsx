import axios from "axios";
import React, {useEffect, useState} from "react";
import './Dummy.css'


const DummyPost = () => {
    
    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://dummyjson.com/posts')
        .then((res) =>{
            setList(res.data.posts)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    useEffect(() =>{
        dataView()
    }, [count])
  return (
    <div>
        <h1 style={{textAlign:"center"}}>POST-LIST</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th style={{backgroundColor:"grey"}}>ID</th>
                    <th style={{backgroundColor:"grey"}}>TITLE</th>
                    <th style={{backgroundColor:"grey"}}>BODY</th>
                    <th style={{backgroundColor:"grey"}}>TAGS</th>
                    <th style={{backgroundColor:"grey"}}>REACTIONS</th>
                    <th style={{backgroundColor:"grey"}}>VIEWS</th>
                    <th style={{backgroundColor:"grey"}}>USERID</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i, index) =>(
                        <tr key={index}>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.body}</td>
                            <td>{i.tags}</td>
                            <td>{i.reactions.likes}, {i.reactions.dislikes}</td>
                            <td>{i.views}</td>
                            <td>{i.userId}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DummyPost
