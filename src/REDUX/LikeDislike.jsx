import React from "react";
import {addLike, addDislike} from "./Slice"
import { useDispatch, useSelector } from "react-redux";


const LikeDislike = () => {

    const data = useSelector((state) => state.vote);
    const dispatch = useDispatch();
  return (
    <div>
            <h1 style={{textAlign:"center"}}>
                <h2>Likes :{data.like}</h2>
                <h2>Dislikes :{data.dislikes}</h2>

                <button onClick={() =>dispatch(addLike())}>LIKE</button>
                <button onClick={() =>dispatch(addDislike())}>DISLIKE</button>
            </h1>
    </div>
  )
}

export default LikeDislike
// roop.riwaaz_