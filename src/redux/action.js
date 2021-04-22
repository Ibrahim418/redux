export const Add_TODO = "Add_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const edit_TODO = "edit_TODO";
export const FILTER_TODO ="FILTER_TODO"
export const TOGGLE_TASK="TOGGLE_TASK"

export function AddTodo (todo) {
    return{
        type: Add_TODO,
        payload :todo,
    }
}

export function deleteTodo(todoId){
    return {
        type :DELETE_TODO,
        payload: todoId,
    }
}
export function editTodo(todoId){
    return {
        type :edit_TODO,
        payload: todoId,
    }
}
export function filterTodo (todoId){
    return {
        type :FILTER_TODO,
        payload : todoId,
    }
}
    export function toggletask (todoId){
        return{
        type :TOGGLE_TASK,
        payload: todoId,
    }
}
