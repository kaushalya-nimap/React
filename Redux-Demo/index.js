const redux=require('redux')
const createStore=redux.createStore
const bindActionCreators=redux.bindActionCreators;
const combineReducers=redux.combineReducers//to combine multiple reducer 


const applyMiddleware=redux.applyMiddleware
const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()

//console.log('From index.js')
const CAKE_ORDERED='CAKE_ORDERED'
const CAKE_RESTOCKED='CAKE_RESTOCKED'
const ICECREAM_ORDERED='ICECREAM_ORDERED'
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED'

//Step 2:Action
function orderCake(){
    return{
    type:CAKE_ORDERED,
    payload:1,
}}
function restockCake(qty=1){
    return{
        type:CAKE_RESTOCKED,
        payload:qty,
    }
}
//action an object with type property
//action creator:a function that returns the type property
//actions only describes what happened
//reducer:specifies how the app's state changes with reponse to the action,in terms of code reducer is a function that accepts state and action as arguments, and returns the next state
//eg:- (prevState,action)=>newState
function orderIceCream(){
    return{
    type:ICECREAM_ORDERED,
    payload:1,
}}
function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty,
    }
}
const initialCakeState={
    numOfCakes:10, 
}
const initialIceCreamState={
       numOfIceCreams:20,   
}

//eg:- (prevState,action)=>newState
//STEP 3:Reducer
const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,           
                //...state is used to make a copy of the state and return it and make changes to only the numberOfCakes property and anotherProperty remains unchanged
                numOfCakes:state.numOfCakes-1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes:state.numOfCakes+action.payload
            }
        default:
            return state
    }
}
const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,           
                numOfIceCreams:state.numOfIceCreams-1
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams+action.payload
            }
        default:
            return state
    }
}

//Step 4:Redux Store:-for entire app only 1 store,following responsibilities
//1.Holds app state
//Allows access to state via getState()
//Allows state to be updated dispatch(action)
//Registers listeners subscribe(listener)
//Handles unregistering of listeners via the function returned by subscribe(listener)
//1.Holds the state

//combine the reducer here before create the store
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
})
const store=createStore(rootReducer,applyMiddleware(logger))
//2
console.log('Initial state',store.getState())
//4
//const unsubscribe=store.subscribe(()=>console.log("Updated state",store.getState()))
//3
// store.dispatch(orderCake()) //In dispatch we invoke the actioncreator that return the action
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const actions=bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)
//this above bindActionCReators function turn object whose value are action creators into object with same key but every ac wrapped into dispatch call so they are invoked directly
//5
//unsubscribe()
