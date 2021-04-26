
import {InputGroup ,FormControl,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import React, { useState } from "react";
import { AddTodo } from './redux/action';
import {v1 as uuid} from 'uuid'

 const Addtask = () => {
 

 const dispatch = useDispatch()

let [name,setName]=useState('');
const handleAdd = (e) => {
  
  dispatch(AddTodo( 
    {
      id :uuid(),
     name : name,
     done:true,
    }))
    setName('')
}

    return (
        <div >
    <InputGroup className="mb-3 Button" type="text"  onChange={(e)=>setName(e.target.value)}>
    <FormControl
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
      value={name}
    />
      <Button  onClick={handleAdd} >
           +
         </Button>
  </InputGroup>
        </div>
    )
}
export default Addtask
