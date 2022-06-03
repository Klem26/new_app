import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../schemas/yupValidation";
import { Button, Box } from "@mui/material";
import { IForm } from "../interfaces";

const onSubmit = async (values: IForm, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

const Login = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="firstName"> Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className={errors.email && touched.email ? "input-error " : ""}
        />
        {errors.email && touched.email && (
          <p className="error"> {errors.email}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error"> {errors.password}</p>
        )}
        <label htmlFor="repeatPassword"> Confirm Password</label>
        <input
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.repeatPassword}
          className={
            errors.repeatPassword && touched.repeatPassword ? "input-error" : ""
          }
        />
        {errors.repeatPassword && touched.repeatPassword && (
          <p className="error"> {errors.repeatPassword}</p>
        )}
        <Box sx={{ height: 15 }} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
