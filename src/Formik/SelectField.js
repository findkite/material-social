import { MenuItem, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

export default function SelectField({ name, options, ...otherProps }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };
  const configSelect = {
    select: true,
    variant: "outlined",
    fullWidth: true,
    ...otherProps,
    ...field,
    onChange: handleChange,
  };
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
