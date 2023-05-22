import { Alert, Avatar, Box, Grid, Link, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { initialValuePassword, validatePassword } from "../validation";
import { LoadingButton } from "@mui/lab";
import http from "../http";
import PasswordField from "../Formik/PasswordField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, login } from "../redux/features/LocalUser/localUserSlice";

function PasswordForm({ userInput }) {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    setLoading(true);
    http
      .post("signin", { userInput, password: values.password })
      .then((res) => {
        setLoading(false);
        setError(null);
        dispatch(login(res.data.token));
        dispatch(addUser(res.data.user));
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
  };
  return (
    <Formik
      initialValues={initialValuePassword}
      validationSchema={validatePassword}
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              welcome back, {userInput}
            </Typography>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Alert severity="error">
                {error.status} - {error.message}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <PasswordField name="password" label="password" />
          </Grid>
          <Grid item xs={12}>
            <Link href="/recover-username" variant="body2"></Link>{" "}
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          <Link href="/forget-password" variant="body2">
            forget password?
          </Link>
          <LoadingButton
            type="submit"
            sx={{ mt: 3, mb: 2 }}
            loading={loading}
            loadingIndicator="Loading…"
            variant="contained"
            disabled={loading}
          >
            Sign in
          </LoadingButton>
        </Grid>
      </Form>
    </Formik>
  );
}
export function AvatarWithText({ text, image }) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          style={{ marginRight: "14px" }}
          alt="Jack Sparrow"
          src="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Typography variant="body2"> Welcome, {text}</Typography>
      </Box>
    </Box>
  );
}
export default PasswordForm;
