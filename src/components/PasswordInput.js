import React from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDefaultUser, login } from "../redux/features/Auth/authSlice";
import { useFormik } from "formik";
import { validatePassword } from "../validation";
import http from "../http";
import { LoadingButton } from "@mui/lab";
export function PasswordInput({ User }) {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validatePassword,
    onSubmit: (values) => {
      setLoading(true);
      http
        .post("checkPassword", {
          username: User.username,
          password: values.password,
        })
        .then((res) => {
          setLoading(false);
          dispatch(login(res.data));
          navigate("/");
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            setError({
              status: error.response.status,
              message: error.response.data.message,
            });
            setLoading(false);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1, width: "100%", maxWidth: 400 }}
    >
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        welcome, {User.first_name} {User.last_name}{" "}
        <Button component={Link} onClick={() => dispatch(deleteDefaultUser())}>
          Not me?
        </Button>
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="password"
        name="password"
        autoComplete="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        autoFocus
      />
      <LoadingButton
        type="submit"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        loading={loading}
        loadingIndicator="Loading…"
        variant="contained"
        disabled={loading}
      >
        Sign In
      </LoadingButton>
      {error && (
        <Alert severity="error">
          {error.status} - {error.message}
        </Alert>
      )}
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
