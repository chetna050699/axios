import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import purchase_book from './BookAction.js';
const BookContainer = () => {

    const noOfBooks=useSelector(state=>state.NumberOfBooks)
    const dispatch=useDispatch()
  return (
    <>
    <div>
        Book Container
    </div>
    <h2>Number of books-{noOfBooks}</h2>
    <button onClick={()=>{dispatch(purchase_book())}}>Buy Books</button>
    </>
    
  )
}

export default BookContainer
