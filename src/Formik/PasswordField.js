import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useField } from "formik";
import React from "react";

export default function PasswordField({ name, label, ...otherProps }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [field, mata] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
  };
  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
  }
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        {...configTextField}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        label={label}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{ color: mata && mata.touched && mata.error && "#ff1744" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {mata && mata.touched && mata.error && (
        <FormHelperText sx={{ color: "#ff1744" }} id={name}>
          {mata.error}
        </FormHelperText>
      )}
    </FormControl>
  );
}
