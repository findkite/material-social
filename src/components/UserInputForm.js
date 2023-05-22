import { Alert, Grid, Link, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import InputField from "../Formik/InputField";
import { initialValueUserInput, validateUserInput } from "../validation";
import { LoadingButton } from "@mui/lab";
import http from "../http";

function UserInputForm({ setUserInput }) {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);
    const user = await http.post("/user-exsits", values);
    console.log(user);
    if (Boolean(user.data)) {
      setLoading(false);
      setUserInput(values.userInput);
    } else {
      setLoading(false);
      setError({
        status: "user not found",
        message: "please check your username",
      });
    }
  };
  return (
    <Formik
      initialValues={initialValueUserInput}
      validationSchema={validateUserInput}
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Let's sign in to findkite website
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
            <InputField name="userInput" label="username or email" />
          </Grid>
          <Grid item xs={12}>
            <Link href="/recover-username" variant="body1">
              forget username?
            </Link>{" "}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Not your computer? Use a Private Window to sign in.
            </Typography>{" "}
            <Link
              href="https://support.google.com/accounts?p=signin_privatebrowsing&hl=en"
              variant="body1"
            >
              Learn more
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          <Link href="/register" variant="body1">
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
      </Form>
    </Formik>
  );
}

export default UserInputForm;
