import {createSlice} from "@reduxjs/toolkit";
import { ordered as CakeOrdered } from "../cake/cakeSlice";

const initialState = {
    numOfIceCreams:15
}
const iceCreamSlice = createSlice({
    name:"icecream",
    initialState,
    reducers: {
    ordered: (state, action)=> {
        state.numOfIceCreams--
    },
    restocked: (state, action)=> {
        state.numOfIceCreams+=action.payload
    }
    },
    extraReducers: (builders)=> {
     builders.addCase(CakeOrdered, (state, action)=> {
        state.numOfIceCreams--;
     })
    }
    // deprecated this version
    // extraReducers: {
    //     ['cakeslice/ordered']: (state)=> {
    //         state.numOfIceCreams--;
    //     }
    // }
})

export default iceCreamSlice.reducer;
export const {ordered,restocked} = iceCreamSlice.actions;