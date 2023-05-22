import { TextField } from "@mui/material";
import { useField } from "formik";
import http from "../http";

export default function InputField({ name, ...otherProps }) {
  const [field, mata, helpers] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    inputProps: {
      onBlur: async (e) => {
        var value = e.target.value;
        if (name === "email" || name === "username") {
          if (value.length > 7) {
            const user = await http.post("/user-exsits", { userInput: value });
            if (user.data) {
              helpers.setError(name + " already exsits");
            }
          }
        }
      },
    },
  };
  if (mata.onBlur) {
    alert(mata.onBlur);
  }
  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }
  return (
    <>
      <TextField {...configTextField} />
    </>
  );
}
