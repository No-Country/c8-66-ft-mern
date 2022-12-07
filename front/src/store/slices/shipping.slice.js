import { createSlice } from '@reduxjs/toolkit'

export const getShippingSlice = createSlice({
    name:"getShipping",
    initialState:[],
    reducers:{
        setShipping:(state,action) =>action.payload,
    },
})

export const {setShipping} = getShippingSlice.actions;
export default getShippingSlice.reducer