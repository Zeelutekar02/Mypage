import React, { useState } from 'react'
import product from "./AllData";
import "./CategoryWiseSorting.css"

const CategoryWiseSorting = () => {

    const [item, setItem] = useState(product);

    const filterItem = (category) => {
         const filterData = product.filter((item)=>{
            return item.category === category;
        }); 

        setItem(filterData);
    }

  return (
    <div>
        <h1 style={{backgroundColor:"ThreeDFace", color:"black", fontSize:"35px", fontWeight:"200", textAlign:"center", border:"1px dotted black", borderRadius:"8px", margin:"10px", padding:"5px"}}>Category-Wise-Sorting</h1>
        <div className='main-box'>
            <button className='Btn' onClick={()=>setItem(product)}>
                All
            </button>

            <button className='Btn' onClick={()=>filterItem("Phone")}>
                Phone
            </button>

            <button className='Btn' onClick={()=>filterItem("Cloths")}>
                Cloths
            </button>

            <button className='Btn' onClick={()=>filterItem("KitchenSet")}>
                Kitchen Set
            </button>

            <button className='Btn' onClick={()=>filterItem("Food")}>
                Food
            </button>
        </div>

        <div className='box'>
            {
                item.map((item)=>(
                    <div className='div' key={item.id}>
                        <img className='image' src={item.image} width="250"/>
                        <h3 className='h3'>{item.name}</h3>
                        <p className='p'>{item.category}</p>
                        <p className='price'>₹{item.price}</p>
                    </div>
                ))
            }   
        </div>
    </div>
  )  
}
export default CategoryWiseSorting
