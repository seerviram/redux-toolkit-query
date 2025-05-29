import {createSlice} from "@reduxjs/toolkit";

 const initialState = {
    numOfCakes:10
 }
 const cakeSlice = createSlice({
    name:"cakeslice",
    initialState,
    reducers: {
        // directly manipulation possible
        // No need of explict new state return
        ordered: (state, action)=> {
            state.numOfCakes-=1
        },
        restocked:(state, action)=> {
            state.numOfCakes+=action.payload
        },
    }
 })

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions;