import React from 'react'
import {InputGroup ,FormControl,Button} from 'react-bootstrap'

 const Addtask = () => {
    return (
        <div >
    <InputGroup className="mb-3 Button">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
      <Button id="basic-addon2" variant="primary" >+</Button>
  </InputGroup>
        </div>
    )
}
export default Addtask
