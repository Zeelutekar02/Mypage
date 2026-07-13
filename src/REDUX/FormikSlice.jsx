import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    student :[], 
}

const FormikSlice = createSlice({
    name:"counter",
    initialState,
    reducers :{
        adddetail :(state, action) =>{
            state.student.push(action.payload)
        },

        updateDetail :(state, action) =>{
            const {index, data} = action.payload
            state.student[index] = data
        },  

        deleteDetail :(state, action) =>{
            state.student.splice(action.payload, 1)
        },
    },
});


export const {adddetail, updateDetail, deleteDetail} = FormikSlice.actions;

export default FormikSlice.reducer;
