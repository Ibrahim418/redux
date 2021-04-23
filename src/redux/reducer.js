
import {TOGGLE_TASK,Add_TODO, DELETE_TODO, edit_TODO , FILTER_TODO} from './action'
import { initstate} from './state'

export let reducer = (state = initstate, action )=>{
    let newTodos;
    switch (action.type) {
        case Add_TODO:
             newTodos =[...state.todos] ;
            newTodos.push(action.payload)
            return {
                ...state,
                todos:newTodos
            };
        case DELETE_TODO:
             newTodos = [...state.todos] ;
            newTodos=newTodos.filter(e=>e.id !== action.payload)
            return {
                ...state,
                todos:newTodos}
        case edit_TODO:
            newTodos = [...state.todos];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return  {
                 ...state,
                todos:newTodos}
            }
      
            case TOGGLE_TASK:
            //     newTodos = [...state.todos] ;
            // return state.map(el=> el.id===action.payload? {...el,isDone:!el.isDone}:el)
            return {...state, todos:state.todos.map(el=> el.id===action.payload? {...el,done:!el.done}:el)}

            case FILTER_TODO:
                return {
                    ...state,
                    filter:action.payload
                }

   
    }
    return state ;
}