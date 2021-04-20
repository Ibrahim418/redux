
import {Add_TODO, DELETE_TODO, edit_TODO} from './action'
import { todos } from './state'

export let reducer = (state = todos, action )=>{
    let newTodos;
    switch (action.type) {
        case Add_TODO:
             newTodos =[...state] ;
            newTodos.push(action.payload)
            return newTodos;
        case DELETE_TODO:
             newTodos =[...state] ;
            newTodos=newTodos.filter  (e=>e.id !== action.payload)
            return newTodos ;
        case edit_TODO:
            break;

   
    }
    return state ;
}