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
        <h1 style={{textAlign:"center"}}>PRODUCT-LIST</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th style={{backgroundColor:"grey"}}>ID</th>
                    <th style={{backgroundColor:"grey"}}>TITLE</th>
                    <th style={{backgroundColor:"grey"}}>DESCRIPTION</th>
                    <th style={{backgroundColor:"grey"}}>CATEGORY</th>
                    <th style={{backgroundColor:"grey"}}>PRICE</th>
                    <th style={{backgroundColor:"grey"}}>DISCOUNTPERCENTAGE</th>
                    <th style={{backgroundColor:"grey"}}>RATING</th>
                    <th style={{backgroundColor:"grey"}}>STOCK</th>
                    <th style={{backgroundColor:"grey"}}>TAGS</th>
                    <th style={{backgroundColor:"grey"}}>BRAND</th>
                    <th style={{backgroundColor:"grey"}}>SKU</th>
                    <th style={{backgroundColor:"grey"}}>WEIGHT</th>
                    <th style={{backgroundColor:"grey"}}>DIMENSIONS</th>
                    <th style={{backgroundColor:"grey"}}>WARRANTYINFORMATION</th>
                    <th style={{backgroundColor:"grey"}}>SHIPPINGINFORMATION</th>
                    <th style={{backgroundColor:"grey"}}>AVAILABILITYSTATUS</th>
                    {/* <th>REVIEWS</th> */}
                    <th style={{backgroundColor:"grey"}}>RETURNPOLICY</th>
                    <th style={{backgroundColor:"grey"}}>MINIMUMORDERQUANTITY</th>
                    <th style={{backgroundColor:"grey"}}>META</th>
                    <th style={{backgroundColor:"grey"}}>IMAGES</th>
                    <th style={{backgroundColor:"grey"}}>THUMBNAIL</th>
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
                                <td>{i.returnPolicy}</td>
                                <td>{i.minimumOrderQuantity}</td>
                                <td>{i.meta.createdAt}, {i.meta.updatedAt}, {i.meta.barcode}, {i.meta.qrCode}</td>
                                <td>{i.images}</td>
                                <td>{i.thumbnail}</td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>
  )
}

export default DummyProduct
