import React, { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import EmailInput from "../validation/email-input";
import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Snackbar,
  Typography,
} from "@mui/material";
import PasswordInput from "../validation/password-input";
import UserNameInput from "../validation/username-input";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../customHook/AppContext";

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
    msg: "You have Successfully Registered",
    severity: "success",
    key: "success",
  },
};

const Signup = () => {
  const navigate = useNavigate();

  function handleSignUp() {
    if (password === "" || email === "" || userName === "") {
      setErrorType(alertMsg.warn.key);
    } else {
      setNoOfUsers([...noOfUsers, data]);
      localStorage.setItem(
        "data",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("data") || "[]"),
          { ...data },
        ])
      );
      localStorage.setItem("LoggedIn", false);
      setErrorType(alertMsg.success.key);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }
  function gotoLogin() {
    navigate("/login");
  }
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorType("");
  };

  const [errors, setErrors] = useState({ pass: false });
  const [password, setPassword] = useState("");
  const [errorType, setErrorType] = useState("");
  const [email, setEmail] = useState("");
  const { noOfUsers, setNoOfUsers, userName, setUserName } =
    useAppContext();
  const data = {
    email: email,
    username: userName,
    pwd: password,
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Card sx={{ width: 350, mt: 1 }}>
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
          <Typography>
            Sign up to see photos and videos from your friends.
          </Typography>
          <EmailInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e, error) =>
              setErrors((state) => ({ ...state, pass: error }))
            }
          />
          <UserNameInput
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={(e, error) =>
              setErrors((state) => ({ ...state, pass: error }))
            }
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e, error) =>
              setErrors((state) => ({ ...state, pass: error }))
            }
          />
          <Typography>
            People who use our service may have uploaded your contact
            information to Instagram.<Link style={{textDecoration:'none'}}>Learn more</Link>
          </Typography>
          <Typography>
            By signing up,you agree to our Terms,Privacy Policy and Cookies
            Policy.
          </Typography>
          <Button
            variant="contained"
            sx={{ m: 2, width: 250 }}
            onClick={handleSignUp}
            disabled={errors.pass}
          >
            Sign Up
          </Button>
          <MyAlert
            open={errorType}
            onClose={handleClose}
            msg={alertMsg[errorType]?.msg}
            severity={alertMsg[errorType]?.severity}
          />
        </CardContent>
      </Card>
      <Card sx={{ marginTop: "5px", p: 3, width: 300 }}>
        Have an account?<Link onClick={gotoLogin} sx={{textDecoration:'none',cursor:'pointer'}}>Log in</Link>
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

export default Signup;

function MyAlert({ open, onClose, msg, severity }) {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
}
