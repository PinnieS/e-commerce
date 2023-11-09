import React, { useState } from "react";
import InputTextMessage from "../../component/TextField/InputTextField";
import { Avatar, Box, Container, Link, Typography, createTheme, useAutocomplete } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Buttons from "../../component/Button/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AlertMessages from "../../component/AlertMessage/AlertMessage";
import { ThemeProvider } from "@emotion/react";
import { orange } from "@mui/material/colors";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text-secondary" align="center" {...props}>
      Copyright &copy; <Link>Alvin & Elfin</Link>
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: orange,
  },
});

function HalamanLogin(params) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isError, setisError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log("data email", data.get("email"));
    console.log("data password", data.get("password"));

    const email = data.get("email");
    const password = data.get("password");

    if (email === "admin@gmail.com" && password === "admin") {
      setisSuccess(true);
    } else {
      setisError("true");
    }
  };

  const handleClose = () => {
    setisSuccess(false);
    setisError(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <LockIcon />
          </Avatar>
          <Typography component={"h1"} variant="h5">
            Sign In
          </Typography>
          <InputTextMessage id="email" label="Email Address" variant="outlined" fullWidth required margin="normal" autautoFocus name="email" type="text" />

          <div style={{ display: "flex", width: "100%", position: "relative" }}>
            <InputTextMessage id="password" label="Password" variant="outlined" fullWidth required margin="normal" autautoFocus name="password" type={isShowPassword ? "text" : "password"} />
            <div style={{ position: "absolute", right: 15, top: 33, cursor: "pointer" }} onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
            </div>
          </div>

          <Buttons type="submit" variant="contained" fullWidth label="Sign In" />

          <AlertMessages label="your email and password is correct!" open={isSuccess} severity="success" onClose={handleClose} />

          <AlertMessages label="your email and password is wrong!" open={isError} severity="error" onClose={handleClose} />

          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default HalamanLogin;
