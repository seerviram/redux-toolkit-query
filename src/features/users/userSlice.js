import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    users:[],
    loading:false,
    error:""
}

export const fetchUsers = createAsyncThunk('user/fetch', ()=> {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response=> {
         const userids = response.data.map(user=> user.id)
         return response.data
        })
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builders)=> {
        builders.addCase(fetchUsers.pending, (state)=> {
            state.loading = true
        })
        builders.addCase(fetchUsers.fulfilled, (state, action)=> {
            state.loading = false
            state.error=""
            state.users = action.payload
        })
        builders.addCase(fetchUsers.rejected,(state, action)=> {
            state.loading = false
            state.error=action.error.message
            state.users = []
        })
    }
})
// console.log("fetchUsers", fetchUsers)

export default userSlice.reducer;
