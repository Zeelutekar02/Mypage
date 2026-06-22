import axios from "axios";
import React, {useEffect, useState} from "react"

const Todo = () =>{

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://jsonplaceholder.typicode.com/todos')
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
            {/* <button onClick={() => setCount(count + 1)}>CLICk</button> */}
            <table border={1}>
                <thead>
                    <tr>
                        <th>USERID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>COMPLETED</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index)=>(
                            <tr key={index}>
                                <td>{i.userId}</td>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.completed}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default Todo