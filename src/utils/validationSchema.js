import * as Yup from "yup";

export const RegistrationValidationSchema = Yup.object({
  rsaPin: Yup.string()
    .matches(/^\d{6,10}$/, "RSA PIN must be 6 to 10 digits")
    .required("RSA PIN is required"),
  surname: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Surname must contain only letters and spaces")
    .required("Surname is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email address is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
