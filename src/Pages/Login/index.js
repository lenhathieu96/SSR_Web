import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress'
import {
  FormGroup,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
} from "@material-ui/core";
import { Form, FastField, Formik } from "formik";
import axios from "axios";

import InputTextField from "../../Components/custom-fields/InputTextField";

import { URL } from "../../Connect";

import loginLogo from "../../Assets/Images/loginLogo.png";
import "./Login.scss";

function Login() {
  const [loading,setLoading] = useState(false)
  let history = useHistory();

  const initialValues = {
    username: "",
    password: "",
  };

  const onLogin = (name, password) => {
    setLoading(true)
    axios
      .post(URL, { name, password })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false)
          localStorage.setItem("token", "1234");
          let { from } =
            name.slice(0, 3) === "bep"
              ? { from: { pathname: `/${name.slice(4)}/Kitchen` } }
              : { from: { pathname: `/${name.slice(4)}/Dashboard` } };
          history.replace(from);
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
      });
  };

  return (
    <Grid className="login-container">
      <Dialog open={true} style={{borderRadius: 20, padding:10}}>
        <DialogTitle>
          <img src={loginLogo} alt="logo" />
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={(value) => onLogin(value.username, value.password)}
          >
            {() => {
              return (
                <div>
                  <Form style={{ display: "flex", flexDirection: "column" }}>
                    <FormGroup className="input-container">
                      <FastField
                        name="username"
                        component={InputTextField}
                        label="Tên Đăng Nhập"
                        type="text"
                      />

                      <FastField
                        name="password"
                        component={InputTextField}
                        label="Mật Khẩu"
                        type="password"
                      />
                    </FormGroup>
                    <FormControl style={{marginTop:20}}>
                      <Button
                        type="submit"
                        style={{ backgroundColor: "#00b551", color: "white" }}
                      >
                        {loading ? <CircularProgress size={24} color='white'/> :'Đăng Nhập'}
                      </Button>
                    </FormControl>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default Login;