import { configureStore } from "@reduxjs/toolkit";
import ReduxSlice from "./Slice"
import ReduxALL from "./Slice"
// import LikeSlice from "./Slice"


export default configureStore({
    reducer :{
        counter: ReduxSlice,
        // vote : LikeSlice,
        counter : ReduxALL
    },
})