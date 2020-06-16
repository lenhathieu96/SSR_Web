import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {FormGroup, FormLabel,Button, Input} from '@material-ui/core'
import axios from "axios";

import {URL} from '../../Connect'

function Login(){
  const [name,setName]= useState()
  const [password,setPassword] = useState()
  
  let history = useHistory()

  const onLogin = (name, password) => {
    axios
      .post(URL, { name, password })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", "1234");
          let { from } =
            name.slice(0, 3) === "bep"
              ? { from: { pathname: `/${name.slice(4)}/Kitchen` } }
              : { from: { pathname: `/${name.slice(4)}/Dashboard` } };
          history.replace(from)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      <FormGroup>
        <FormLabel>Email address</FormLabel>
        <Input placeholder="Enter email" value={name} onChange={(event)=>setName(event.target.value)} />
      </FormGroup>
    
      <FormGroup>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Password"value={password} onChange={(event)=>setPassword(event.target.value)}  />
      </FormGroup>
      <Button onClick={()=>onLogin(name,password)}>
        Submit
      </Button>
    </form>
  );
}

export default Login;
