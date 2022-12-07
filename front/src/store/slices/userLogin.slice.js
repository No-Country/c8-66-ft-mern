import { createSlice } from '@reduxjs/toolkit'

export const userLoginSlice = createSlice({
    name:"userLogin",
    initialState:"",
    reducers:{
        setUserLogin:(state,action)=>action.payload,
    }

})

export const {setUserLogin} = userLoginSlice.actions
export default userLoginSlice.reducer