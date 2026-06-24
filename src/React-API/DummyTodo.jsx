import axios from "axios";
import React, {useEffect, useState} from "react";
import './Dummy.css'

const DummyTodo = () =>{

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://dummyjson.com/todos')
        .then((res) =>{
            setList(res.data.todos)
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
                <h1 style={{textAlign:"center"}}>TODOS-LIST</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"grey"}}>ID</th>
                            <th style={{backgroundColor:"grey"}}>TODO</th>
                            <th style={{backgroundColor:"grey"}}>COMPLETED</th>
                            <th style={{backgroundColor:"grey"}}>USERID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((i, index) =>(
                                <tr key={index}>
                                    <td>{i.id}</td>
                                    <td>{i.todo}</td>
                                    <td>{i.completed ? "true" : "false"}</td>
                                    <td>{i.userId}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default DummyTodo