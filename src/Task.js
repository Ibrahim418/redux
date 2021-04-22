import React, { useState } from 'react'
import {InputGroup ,FormControl,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { deleteTodo , editTodo , toggletask} from './redux/action';

const Task = ({todo}) => {
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState(todo.name)
  
const dispatch = useDispatch();

    return (
      <div>
      <div className="row mx-2 align-items-center">
          
          <div className="col">
              {editable ?
                  <input type="text" className="form-control"
                      value={name}
                      onChange={(e) => {
                          setName(e.target.value);
                      }}

                  />
                  :
                  <h4>{todo.name}</h4>}
          </div>
          <button className="btn btn-primary m-2"
              onClick={() => {
                  if(editable) {
                      dispatch(editTodo({...todo,name: name}))
                   setName(todo.name);   
                  }
                  setEditable(!editable);
                

              }} >
         {editable?"Update":"Edit"}</button>
          <button className="btn btn-danger m-2"
              onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              

              
<button style={{textDecoration: todo.isDone? "lineThrought":"none"}} 
className="btn btn-danger m-2" onClick={()=>dispatch(toggletask(todo.id))}>
    {todo.done ? 'Done' : 'undone'}
    </button>

              
          
      </div>
  </div>
  
    )
    }

export default Task ;

