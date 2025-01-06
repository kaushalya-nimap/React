import { createSlice } from "@reduxjs/toolkit";


const CakeSlice = createSlice({
    name:"slice",
    initialState:{quantity:0,amount:0},
    reducers:{
        ordercake : (state,action)=>{
            state.quantity=state.quantity+action.payload.quantity
        }
    },extraReducers:(builder)=>{
        builder.addCase()
    }
})