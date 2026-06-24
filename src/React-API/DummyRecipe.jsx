import axios from "axios";
import React, {useEffect, useState} from "react"
import './Dummy.css'



const DummyRecipe = () => {

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://dummyjson.com/recipes')
        .then((res) =>{
            setList(res.data.recipes)
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
        <h1 style={{textAlign:"center"}}>RECIPE-LIST</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th style={{backgroundColor:"grey"}}>ID</th>
                    <th style={{backgroundColor:"grey"}}>NAME</th>
                    <th style={{backgroundColor:"grey"}}>INGREDIENTS</th>
                    <th style={{backgroundColor:"grey"}}>INSTRUCTIONS</th>
                    <th style={{backgroundColor:"grey"}}>PREPTIMEMINUTES</th>
                    <th style={{backgroundColor:"grey"}}>COOKTIMEMINUTES</th>
                    <th style={{backgroundColor:"grey"}}>SERVINGS</th>
                    <th style={{backgroundColor:"grey"}}>DIFFICULTY</th>
                    <th style={{backgroundColor:"grey"}}>CUISINE</th>
                    <th style={{backgroundColor:"grey"}}>CALORIESPERSERVING</th>
                    <th style={{backgroundColor:"grey"}}>TAGS</th>
                    <th style={{backgroundColor:"grey"}}>USERID</th>
                    <th style={{backgroundColor:"grey"}}>IMAGE</th>
                    <th style={{backgroundColor:"grey"}}>RATING</th>
                    <th style={{backgroundColor:"grey"}}>REVIEWCOUNT</th>
                    <th style={{backgroundColor:"grey"}}>MEALTYPE</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i, index) =>(
                        <tr key={index}>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.ingredients}</td>
                            <td>{i.instructions}</td>
                            <td>{i.prepTimeMinutes}</td>
                            <td>{i.cookTimeMinutes}</td>
                            <td>{i.servings}</td>
                            <td>{i.difficulty}</td>
                            <td>{i.cuisine}</td>
                            <td>{i.caloriesPerServing}</td>
                            <td>{i.tags}</td>
                            <td>{i.userId}</td>
                            <td>{i.image}</td>
                            <td>{i.rating}</td>
                            <td>{i.reviewCount}</td>
                            <td>{i.mealType}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DummyRecipe
