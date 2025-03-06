import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import privateRequest from "../api/privateRequest"
import { FETCH_TODO } from "../api/apiEndpoints"

export const getTodos=createAsyncThunk('get/todos',
    async()=>{
        const res= await privateRequest(FETCH_TODO)
        console.log(res)
        return res.data.todos
    }
)

export const todoSlice=createSlice({
    name:'todos',
    initialState:{
        allTodos:[],
        loading:false,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getTodos.fulfilled,(state,action)=>{
                state.allTodos=action.payload
                state.loading=false
            })
            .addCase(getTodos.pending,(state)=>{
                state.loading=true
            })
            .addCase(getTodos.rejected,(state)=>{
                state.allTodos=[]
                state.loading=false
            })
    }
})
export default todoSlice.reducer