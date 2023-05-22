import * as yup from "yup";
export const validateUserInput = yup.object({
  userInput: yup.string("Enter your username").required("Email is required"),
});
export const validatePassword = yup.object({
  password: yup.string("Enter your password").required("Password is required"),
});
export const validateForgetPassword = yup.object({
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  oldPassword: yup.string().required("Password is required"),
});
export const validateEmail = yup.object({
  password: yup
    .string("Enter your password")
    .email()
    .required("Password is required"),
});
export const initialValueUserInput = {
  userInput: "",
};
export const initialValuePassword = {
  password: "",
};
export const initialName = {
  firstName: "",
  lastName: "",
};
export const initialForgetPassword = {
  password: "",
  confirmPassword: "",
  oldPassword: "",
};
export const initialValueEmail = {
  email: "",
};
export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export const NameSchema = yup.object({
  firstName: yup.string().max(50).required(),
  lastName: yup.string().max(50).required(),
});

export const SignUpSchema = yup.object({
  firstName: yup.string().max(50).required(),
  lastName: yup.string().max(50).required(),
  email: yup.string().email(),
  username: yup.string().min(8),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
