const { cakeActions } = require('../cake/cakeSlice')

const createSlice=require('@reduxjs/toolkit').createSlice

const initialState={
    numOfIcecreams:20
}

const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIcecreams--
        },
        restocked:(state,action)=>{
            state.numOfIcecreams+=action.payload
        },
    },

    //using this extra reducer i am decrementing the icecream qty when the cake is ordered the cake as well as the number of icecream is also decremneted.
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,state=>{
            state.numOfIcecreams--
        })
    }
})
 module.exports=icecreamSlice.reducer
 module.exports.icecreamActions=icecreamSlice.actions
// module.export={
//     reducer:icecreamSlice.reducer,
//     icecreamActions:icecreamSlice.actions
// }