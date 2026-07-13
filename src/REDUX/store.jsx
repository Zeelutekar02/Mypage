import { configureStore } from "@reduxjs/toolkit";
import ReduxSlice from "./Slice"
// import LikeSlice from "./Slice"
import studentReducer from "./FormikSlice"


export default configureStore({
    reducer :{
        counter: ReduxSlice,
        // vote : LikeSlice,
        counter: studentReducer
    },
})