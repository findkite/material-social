import { Alert, Grid, Link } from "@mui/material";
import { Formik, Form } from "formik";
import React from "react";
import { SignUpSchema, initialValues } from "../validation";
import InputField from "../Formik/InputField";
import { LoadingButton } from "@mui/lab";
import http from "../http";
import PasswordField from "../Formik/PasswordField";

function SignUpForm() {
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const handleSubmit = (values) => {
    setLoading(true);
    http
      .post("signup", values)
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        setMessage({ type: "success", message: res.data.message });
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setMessage({
            type: "error",
            message: error.response.data.message,
          });
          setLoading(false);
        }
      });
  };
  return (
    <>
      {!success ? (
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={SignUpSchema}
        >
          <Form>
            <Grid container spacing={2} maxWidth="800px">
              {message && (
                <Grid item xs={12}>
                  <Alert severity={message.type}>{message.message}</Alert>
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <InputField name="firstName" label="first name" />
              </Grid>{" "}
              <Grid item xs={12} sm={6}>
                <InputField name="lastName" label="last name" />
              </Grid>{" "}
              <Grid item xs={12}>
                <InputField name="email" label="email" />
              </Grid>{" "}
              <Grid item xs={12}>
                <InputField name="username" label="username" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PasswordField name="password" label="password" />
              </Grid>{" "}
              <Grid item xs={12} sm={6}>
                <PasswordField
                  name="confirmPassword"
                  label="confirm password"
                />
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: 3 }}
            >
              <Link href="/login" variant="body2">
                back to login
              </Link>
              <LoadingButton
                type="submit"
                sx={{ mt: 3, mb: 2 }}
                loading={loading}
                disabled={loading}
                loadingIndicator="Loading…"
                variant="contained"
              >
                Sign In
              </LoadingButton>
            </Grid>
          </Form>
        </Formik>
      ) : (
        <>
          {message && (
            <Grid item xs={12}>
              <Alert severity={message.type}>{message.message}</Alert>
              <Link href="/login" variant="body2">
                back to login page
              </Link>
            </Grid>
          )}
        </>
      )}
    </>
  );
}

export default SignUpForm;
