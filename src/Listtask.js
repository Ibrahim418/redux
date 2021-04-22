import React from 'react'
import {useSelector} from 'react-redux' ;
import Task from './Task'
const Listtask = () => {
    const todos = useSelector(state => state.todos)
    const filter = useSelector(state => state.filter)
    console.log(filter,todos)
const filterT=(todos,filter)=>   {
if (filter=== 'all'){
    return todos
}
else if ( filter ==='undone'){
    return todos.filter(el=>el.done==false)
}
else if ( filter ==='done'){
    return todos.filter(el=>el.done==true)
}
}
let newfilterdlist = filterT(todos,filter)
    return (
        <div>
            {newfilterdlist.map (todo => {
                return <Task key ={todo.id} todo ={todo}/>
            })}
            
        </div>
    )
}

export default Listtask

