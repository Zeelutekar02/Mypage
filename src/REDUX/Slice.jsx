import { createSlice } from "@reduxjs/toolkit";


const ReduxSlice = createSlice({
    name :'Task',
    initialState :{
        no :0,
        str :"Example"
    },
    reducers :{
        increment :(state) =>{
            state.no += 1
        },  
        decrement :(state, action) =>{
            console.log(action.payload);
            state.no -= action.payload
        }
    }
})

export default ReduxSlice.reducer
export const {increment, decrement} = ReduxSlice.actions


//  LIKE-DISLIKE  //

// const LikeSlice = createSlice({
//     name :"like",
//     initialState :{
//         like : 0,
//         dislike : 0,
//     },
//     reducers :{
//         addLike :(state) =>{
//             state.like += 1;
//         },
//         addDislike :(state) =>{
//             state.dislike += 0;
//         },
//     },
// });

// export default LikeSlice.reducer;
// export const {addLike, addDislike} = LikeSlice.actions;

