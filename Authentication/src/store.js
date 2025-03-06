import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "./slice/todoSlice";
const rootReducer=configureStore({
    reducer:{
        todos:todoSlice
    }
})
export default rootReducer