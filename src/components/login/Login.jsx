import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Snackbar,
  Typography,
} from "@mui/material";
import PasswordInput from "../validation/password-input";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../customHook/AppContext";
import UsernameInput from "../validation/username-input";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const alertMsg = {
  error: {
    msg: "email or password is Invalid",
    severity: "error",
    key: "error",
  },
  warn: {
    msg: "No Field Can be Empty",
    severity: "warning",
    key: "warn",
  },
  success: {
    msg: "You have Successfully LoggedIn",
    severity: "success",
    key: "success",
  },
};

const Login = () => {
  const navigate = useNavigate();
  const { userName, setUserName } = useAppContext();
  let data = [...JSON.parse(localStorage.getItem("data"))];
  console.log(data);
  const [pwd, setPwd] = useState("");
  const [errors, setErrors] = useState({ pass: false });
  const [errorType, setErrorType] = useState("");

  function handleLogin() {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].username === userName && data[i].pwd === pwd) {
        count++;
      }
    }
    if (pwd === "" || userName === "") {
      setErrorType(alertMsg.warn.key);
    } else if (count >= 1) {
      setErrorType(alertMsg.success.key);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
      localStorage.setItem("LoggedIn", true);
    } else {
      setErrorType(alertMsg.error.key);
    }
  }
  function backToSignUp() {
    navigate("/");
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorType("");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
      }}
    >
      <Card sx={{ width: 350 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="instagram.png"
            alt="data not found"
            height="40px"
            padding="10px"
          />
          <UsernameInput
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={(e, error) =>
              setErrors((state) => ({ ...state, pass: error }))
            }
          />
          <PasswordInput
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            onBlur={(e, error) =>
              setErrors((state) => ({ ...state, pass: error }))
            }
          />
          <Button
            variant="contained"
            sx={{ m: 2, width: 250 }}
            onClick={handleLogin}
          >
            Log in
          </Button>
          <MyAlert
            open={errorType}
            onClose={handleClose}
            msg={alertMsg[errorType]?.msg}
            severity={alertMsg[errorType]?.severity}
          />
          <Root>
            <Divider>OR</Divider>
          </Root>
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
            Forgot password?
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ mt: 1, p: 3, width: 300 }}>
        Don't have an account?
        <Link
          onClick={backToSignUp}
          sx={{ textDecoration: "none", cursor: "pointer" }}
        >
          Sign up
        </Link>
      </Card>
      <Typography>Get the app.</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <img src="GPay.svg" alt="data not found" height="90px" width="100px" />
        <img
          src="microsoft.jpg"
          alt="data not found"
          height="30px"
          width="90px"
        />
      </Box>
    </Box>
  );
};

export default Login;
function MyAlert({ open, onClose, msg, severity }) {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
}
