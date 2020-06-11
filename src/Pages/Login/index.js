import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import View from './View'
import serverURL from '../../Connect/ServerURL'
function Login(props) {
  let history = useHistory();

  const onLogin = (name, password) => {
    console.log(name, password);
    axios
      .post(serverURL, { name, password })
      .then((res) => {
        // console.log(res.status);
        // console.log(name.slice(0, 3));
        if (res.status === 200) {
          localStorage.setItem("token", "1234");
          let { from } =
            name.slice(0, 3) === "bep"
              ? { from: { pathname: `/${name.slice(4)}/bep` } }
              : { from: { pathname: `/${name.slice(4)}/quanly` } };
          history.replace(from)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View onLogin = {onLogin}/>
  );
}

export default Login;
