import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {FormGroup, FormLabel,Button, Input} from '@material-ui/core'

View.propTypes = {
  onLogin : PropTypes.func
};

function View(props) {

  const [name,setName]= useState()
  const [password,setPassword] = useState()

  const {onLogin} = props
  return (
    <form>
  <FormGroup controlId="formBasicEmail">
    <FormLabel>Email address</FormLabel>
    <Input placeholder="Enter email" value={name} onChange={(event)=>setName(event.target.value)} />
  </FormGroup>

  <FormGroup controlId="formBasicPassword">
    <FormLabel>Password</FormLabel>
    <Input type="password" placeholder="Password"value={password} onChange={(event)=>setPassword(event.target.value)}  />
  </FormGroup>
  <Button variant="primary" onClick={()=>onLogin(name,password)}>
    Submit
  </Button>
</form>
  );
}

export default View;