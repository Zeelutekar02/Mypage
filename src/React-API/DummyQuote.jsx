import axios from "axios";
import React, {useEffect, useState} from "react";
import './Dummy.css'


const DummyQuote = () => {

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://dummyjson.com/quotes')
        .then((res) =>{
            setList(res.data.quotes)
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
        <h1 style={{textAlign:"center"}}>QUOTE-LIST</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th style={{backgroundColor:"grey"}}>ID</th>
                    <th style={{backgroundColor:"grey"}}>QUOTE</th>
                    <th style={{backgroundColor:"grey"}}>AUTHOR</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i, index) =>(
                        <tr key={index}>
                            <td>{i.id}</td>
                            <td>{i.quote}</td>
                            <td>{i.author}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DummyQuote
