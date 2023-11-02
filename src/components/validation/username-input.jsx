import { FormControl, FormHelperText, TextField } from "@mui/material";
import React, { useState } from "react";

let errMsgs = {
  emptyField: "Please fill username",
  wrongPwd: "Enter the userName properly",
};

let userNameValidation =
  /^(?=.*[a-z])(?=.*[_.])(?=.*[0-9])[a-z\d._]{8,}$/;

function UsernameInput(props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleBlur(e) {
    const { value } = e.target;
    setValue(value);
    const usernameRegex = new RegExp(userNameValidation);
    setError(!usernameRegex.test(value));

    if (props.onBlur) {
      props?.onBlur?.(e, !usernameRegex.test(value));
    }
  }
  return (
    <FormControl error={error} variant="standard">
      <TextField
        sx={{ marginTop: "5px", width: 250 }}
        id="outlined-basic"
        label="User Name"
        variant="outlined"
        {...props}
        onBlur={handleBlur}
      />
      {error && (
        <FormHelperText id="component-error-text">
          {value ? errMsgs.wrongPwd : errMsgs.emptyField}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default UsernameInput;
