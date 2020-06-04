import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Form,Button} from 'react-bootstrap'

View.propTypes = {
  onLogin : PropTypes.func
};

function View(props) {

  const [name,setName]= useState()
  const [password,setPassword] = useState()

  const {onLogin} = props
  return (
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control placeholder="Enter email" value={name} onChange={(event)=>setName(event.target.value)} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"value={password} onChange={(event)=>setPassword(event.target.value)}  />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" onClick={()=>onLogin(name,password)}>
    Submit
  </Button>
</Form>
  );
}

export default View;