import axios from "axios";
import React, {useEffect, useState} from "react";
import './Dummy.css'

const DummyProduct = () => {

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://dummyjson.com/products')
        .then((res) =>{
            setList(res.data.products)
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
        <h1 style={{textAlign:"center", backgroundColor:"purple", color:"lightyellow", height:"50px", width:"115%"}}>Product-List</h1>
        <br></br>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                    <th>DISCOUNTPERCENTAGE</th>
                    <th>RATING</th>
                    <th>STOCK</th>
                    <th>TAGS</th>
                    <th>BRAND</th>
                    <th>SKU</th>
                    <th>WEIGHT</th>
                    <th>DIMENSIONS</th>
                    <th>WARRANTYINFORMATION</th>
                    <th>SHIPPINGINFORMATION</th>
                    <th>AVAILABILITYSTATUS</th>
                    <th>REVIEWS</th>
                    <th>RETURNPOLICY</th>
                    <th>MINIMUMORDERQUANTITY</th>
                    <th>META</th>
                    <th>IMAGES</th>
                    <th>THUMBNAIL</th>
                </tr>
            </thead>
            <tbody>
               {
                        list.map((i, index)=>(
                            <tr key={index}>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.description}</td>
                                <td>{i.category}</td>
                                <td>{i.price}</td>
                                <td>{i.discountPercentage}</td>
                                <td>{i.rating}</td>
                                <td>{i.stock}</td>
                                <td>{i.tags}</td>
                                <td>{i.brand}</td>
                                <td>{i.sku}</td>
                                <td>{i.weight}</td>
                                <td>{i.dimensions.width}, {i.dimensions.height}, {i.dimensions.depth}</td>
                                <td>{i.warrantyInformation}</td>
                                <td>{i.shippingInformation}</td>
                                <td>{i.availabilityStatus}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>
  )
}

export default DummyProduct
