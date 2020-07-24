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

import useStyles from './Styles/index.css'

import InputTextField from "../../Components/custom-fields/InputTextField";

import { URL } from "../../Connect";

import loginLogo from "../../Assets/Images/loginLogo.png";
import "./Styles/Login.scss";

function Login() {
  const [loading,setLoading] = useState(false)
  let history = useHistory();

  const initialValues = {
    username: "",
    password: "",
  };

  const classes = useStyles();

  const onLogin = (username, password) => {
    setLoading(true)
    axios
      .post(URL+'/auth', {params:{username, password}  })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false)
          localStorage.setItem(username.slice(0,3)==='man'?'manToken':'kitToken', "1234");
          let { from } =
          username.slice(0, 3) === "bep"
              ? { from: { pathname: `/${username.slice(4)}/Kitchen` } }
              : { from: { pathname: `/${username.slice(4)}/Dashboard` } };
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
      <Dialog open={true} maxWidth='xs' fullWidth classes={{paper:classes.loginModalPaper}}>
        <DialogTitle disableTypography classes={{root:classes.loginModalTitleRoot}}>
          <img src={loginLogo} alt="logo" />
        </DialogTitle>
        <DialogTitle disableTypography classes={{root:classes.loginModalTitleRoot}}>
          <h1>Đăng Nhập</h1>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={(value) => onLogin(value.username, value.password)}
          >
            {() => {
              return (
                <Grid>
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
                        classes={{root:classes.btnLogin}}
                        type="submit"
                        style={{ backgroundColor: "#00b551", color: "white" }}
                      >
                        {loading ? <CircularProgress size={24} color='white'/> :'Đăng Nhập'}
                      </Button>
                    </FormControl>
                  </Form>
                </Grid>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default Login;