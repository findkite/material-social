import { Alert, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { NameSchema } from "../validation";
import { LoadingButton } from "@mui/lab";
import http from "../http";
import InputField from "../Formik/InputField";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/features/LocalUser/localUserSlice";

function ChangeNameForm({ username }) {
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state) => state.local.user);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    setLoading(true);
    http
      .post("change-name", values)
      .then((res) => {
        setLoading(false);
        setMessage({ success: true, message: res.data.message });
        dispatch(updateUser(res.data));
        localStorage.setItem("User", JSON.stringify(res.data.user));
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
      initialValues={{
        firstName: user.first_name,
        lastName: user.last_name,
      }}
      validationSchema={NameSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              change your name
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
            <InputField name="firstName" label="first name" />
          </Grid>{" "}
          <Grid item xs={12}>
            <InputField name="lastName" label="last name" />
          </Grid>{" "}
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
              Change name
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}
export default ChangeNameForm;
