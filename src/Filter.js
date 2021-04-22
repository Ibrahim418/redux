import React from 'react'
import {filterTodo} from './redux/action'
import {useDispatch} from 'react-redux'
const Filter = () => {
    const dispatch = useDispatch()
    const handleFilter = (e) => {
        e.preventDefault()
        dispatch(filterTodo(e.target.id))
    }
    
    
    return (
        <div>
          <form class="filter-input">
              
              <button for="all"  id='all' onClick={handleFilter}>All</button>
              <button for="done" id='done' onClick={handleFilter}>Done</button>
              <button for="undone" id='undone' onClick={handleFilter}>Not-done</button></form>  
        </div>
    )
}

export default Filter
