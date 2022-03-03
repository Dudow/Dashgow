import * as yup from "yup";

export const createUserFormSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must have at least 6 chars"),
  name: yup.string().required("Name is required"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "Passwords must match"),
});
