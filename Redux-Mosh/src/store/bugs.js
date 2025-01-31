import { createAction,createReducer } from "@reduxjs/toolkit"
 
const action=createAction("bugUpdated")
console.log(action())
//Action creator
export const bugAdded=createAction("budAdded")

export const bugResolved=createAction("bugResolved")

export const bugRemoved=createAction("bugRemoved")
//reducer
let lastId=0
// export default createReducer([],{
//     bugAdded:(state,action)=>{
//         state.push({
//             id:++lastId,
//             description:action.payload.description,
//             resolved:false
//         })
//     },
//     // bugResolved:(bugs,action)=>{
//     //    const index=bugs.find((bug)=>bug.id===action.payload.id)
//     //     bugs[index].resolved=true
//     //     //bugs.map((bug)=>bug.id!==action.payload.id?bug:{...bug,resolved:true})
//     // },
//     bugRemoved:(bugs,action)=>{
//         bugs.filter((bugs)=>bugs.id!==action.payload.id)
//     }
// })
export default function reducer(state=[],action){
    if(action.type===bugAdded.type)
        return[
            ...state,
            {
                id:++lastId,
                description:action.payload.description,
                resolved:false
            }
        ]
    
    else if(action.type===bugRemoved.type)
        return state.filter((bug)=>bug.id!==action.payload.id)
    
    else if(action.type===bugResolved.type)
        return state.map((bug)=>bug.id!==action.payload.id?bug:{...bug,resolved:true})
  
        return state
}
