import React from 'react'
import {useSelector} from 'react-redux' ;
import Task from './Task'
const Listtask = () => {
    const todos = useSelector(state => state)
    
    return (
        <div>
            {todos.map (todo => {
                return <Task key ={todo.id} todo ={todo}/>
            })}
            
        </div>
    )
}

export default Listtask

