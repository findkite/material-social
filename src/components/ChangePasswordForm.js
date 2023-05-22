import { Alert, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { initialForgetPassword, validateForgetPassword } from "../validation";
import { LoadingButton } from "@mui/lab";
import http from "../http";
import PasswordField from "../Formik/PasswordField";

function ChangePasswordForm({ username }) {
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = (values) => {
    setLoading(true);
    http
      .post("change-password", {
        oldPassword: values.oldPassword,
        password: values.password,
      })
      .then((res) => {
        setLoading(false);
        setMessage({ success: true, message: res.data.message });
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setMessage({
            success: false,
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
      initialValues={initialForgetPassword}
      validationSchema={validateForgetPassword}
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              change your password
            </Typography>
          </Grid>
          {message && (
            <Grid item xs={12}>
              <Alert severity={message.success ? "success" : "error"}>
                {message.message}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <PasswordField name="oldPassword" label="current password" />
          </Grid>
          <Grid item xs={12}>
            <PasswordField name="password" label="password" />
          </Grid>
          <Grid item xs={12}>
            <PasswordField name="confirmPassword" label="confirm password" />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mt: 1, display: "fex", justifyContent: "end" }}
          >
            <LoadingButton
              type="submit"
              loading={loading}
              loadingIndicator="Loading…"
              variant="contained"
              disabled={loading}
            >
              Change Password
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}
export default ChangePasswordForm;
