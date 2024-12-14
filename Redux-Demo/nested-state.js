const redux=require('redux')
const produce=require('immer').produce
const initialState={
    name:'Vishwas',
    address:{
        street:'123 Main St',
        city:'Boston',
        state:'MA'
    },
}
//STEP 1:-Define const for action type
const STREET_UPDATED='STREET_UPDATED'
//STEP 2:Define action creator that returns the action object
const updateStreet=(street)=>{
    return{
        type:STREET_UPDATED,
        payload:street,
    }
}
//STEP 3:-Define the reducer to handle the action
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case STREET_UPDATED:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload,
            //     },
            // }
            //immer simplifies handling a function with argument draft that receives draft copy of the state where we are updating the draft state,as if state is mutable.
            //so updating the state directly
            return produce(state,(draft)=>{
                draft.address.street=action.payload
            })
        default:{
            return state
        }    
    }
}
const store=redux.createStore(reducer)
console.log('Initial state',store.getState())
const unsubscribe=store.subscribe(()=>{
    console.log('Updated state',store.getState())
})
store.dispatch(updateStreet('456 Main St'))
unsubscribe()

