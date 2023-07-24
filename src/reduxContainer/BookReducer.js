import { buyBook } from "./BookTypes"

const initialState={
    NumberOfBooks:20
}

const BookReducer=(state=initialState,action)=>{
    switch(action.type){
        case buyBook:return{
            ...state,NumberOfBooks:state.initialState-1
        }
        default:return state
    }
}

export default BookReducer;