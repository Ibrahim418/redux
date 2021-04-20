export const Add_TODO = "Add_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const edit_TODO = "edit_TODO";


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