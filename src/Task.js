import React, { useState } from 'react'
import {InputGroup ,FormControl,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { deleteTodo , editTodo } from './redux/action';

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
                  dispatch(editTodo({...todo,name: name}))
                  if(editable) {
                   setName(todo.name);   
                  }
                  setEditable(!editable);
                

              }} >
         {editable?"Update":"Edit"}</button>
          <button className="btn btn-danger m-2"
              onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              

              <input type="checkbox" name="button" id="button"/>
<button className="btn btn-danger m-2">Done</button>

              
          
      </div>
  </div>
  
    )
    }

export default Task ;

