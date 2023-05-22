import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

export default function DateTimePicker({ name, ...otherProps }) {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "outlined",
    fullWidth: true,
  };
  if (meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }
  return <TextField {...configDateTimePicker} />;
}
