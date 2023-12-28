/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import useStyles from "./style";
import ButtonComponent from "../../components/button";
import AuthService from "../../services/auth";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  setAuthenticated: (authenticated: boolean) => void;
}

const Login: FC<Props> = ({ open, handleClose, setAuthenticated }) => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    return () => reset({ username: "", password: "" });
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length > 0) setShowError(true);
    else if (showError) setShowError(false);
  }, [errors]);

  const submitLogin = async ({ username, password }: any) => {
    try {
      const token = await AuthService.login(username, password);
      if (token) await setAuthenticated(true);
      await handleClose();
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      className={classes.loginContainer}
    >
      <Fade in={open}>
        <Box className="boxContainer" sx={style}>
          <Typography id="transition-modal-title" variant="h2" component="h2">
            Sign in
          </Typography>
          {showError && (
            <Typography id="transition-modal-title" variant="h6" component="h6">
              Invalid username or password
            </Typography>
          )}
          <form
            onSubmit={handleSubmit(submitLogin)}
            autoComplete="off"
            noValidate
          >
            <FormControl sx={{ marginBottom: "20px" }}>
              <OutlinedInput
                placeholder="Enter username"
                {...register("username", { required: true })}
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "50px" }}>
              <OutlinedInput
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
            </FormControl>
            <ButtonComponent type="submit">Log In</ButtonComponent>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Login;
