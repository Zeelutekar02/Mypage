import axios from "axios";
import React, {useEffect, useState} from "react";
import './Dummy.css'

const DummyCart = () => {

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://dummyjson.com/carts')
        .then((res) =>{
            setList(res.data.carts)
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
                <h1 style={{textAlign:"center"}}>CARTS-LIST</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"grey"}}>ID</th>
                            <th style={{backgroundColor:"grey"}}>PRODUCTS</th>
                            <th style={{backgroundColor:"grey"}}>TOTAL</th>
                            <th style={{backgroundColor:"grey"}}>DISCOUNTEDTOTAL</th>
                            <th style={{backgroundColor:"grey"}}>USERID</th>
                            <th style={{backgroundColor:"grey"}}>TOTALPRODUCTS</th>
                            <th style={{backgroundColor:"grey"}}>TOTALQUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((i, index) =>(
                                <tr key={index}>
                                    <td>{i.id}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
  )
}

export default DummyCart
