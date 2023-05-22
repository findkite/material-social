import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./authSlice";
import { Alert, Box, Grid, Link, TextField, Typography } from "@mui/material";
import http from "../../../http";
import { useFormik } from "formik";
import { validateUserName } from "../../../validation";
import LoadingButton from "@mui/lab/LoadingButton";
export function AddAuth() {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: validateUserName,
    onSubmit: (values) => {
      setLoading(true);
      http
        .post("getUser", values)
        .then((res) => {
          setLoading(false);
          dispatch(addUser(res.data));
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
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="username"
        name="username"
        autoComplete="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        autoFocus
      />
      {error && (
        <Alert severity="error">
          {error.status} - {error.message}
        </Alert>
      )}{" "}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Link href="/login" variant="body2">
          forget password?
        </Link>{" "}
      </Grid>{" "}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Not your computer? Use a Private Window to sign in.
          </Typography>{" "}
          <Link
            href="https://support.google.com/accounts?p=signin_privatebrowsing&hl=en"
            variant="body2"
          >
            Learn more
          </Link>
        </Grid>
        <Link href="/login" variant="body2">
          Create account
        </Link>{" "}
        <LoadingButton
          type="submit"
          sx={{ mt: 3, mb: 2 }}
          loading={loading}
          loadingIndicator="Loading…"
          variant="contained"
          disabled={loading}
        >
          Next
        </LoadingButton>
      </Grid>
    </Box>
  );
}
