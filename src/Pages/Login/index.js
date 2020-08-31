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

import useStyles from './Styles/index.css'

import InputTextField from "../../Components/custom-fields/InputTextField";

import authAPI from '../../Api/AuthAPI'

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

  const onLogin = async (userAccount) => {
    setLoading(true)
    try{
      const respone = await authAPI.login(userAccount)
      localStorage.setItem('accessToken',respone.data.accessToken)
      localStorage.setItem('refreshToken', respone.data.refreshToken)
      
      let username = userAccount.username
      let { from } =
          username.slice(0, 3) === "bep"
              ? { from: { pathname: `/${username.slice(4)}/Kitchen` } }
              : { from: { pathname: `/${username.slice(4)}/Dashboard` } };
          history.replace(from);

      setLoading(false)
    }catch(error){
      console.log(error)
      setLoading(false)
    }
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
            onSubmit={(value) => onLogin(value)}
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
                        {loading ? <CircularProgress size={24} color='inherit'/> :'Đăng Nhập'}
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