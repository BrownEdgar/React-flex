import React from "react";
import { useState } from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { object, string } from "yup";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const validationScheme = object({
  username: string().min(3).max(20).required(),
  email: string().required(),
  password: string()
    .matches(/[A-Z]/, "Password must contain at least one uppercase.")
    .matches(/\d/, "Password must contain at least one number.")
    .required(),
});

export default function App() {
  const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      id: Date.now(),
      ...values,
    };
    setUsers([...users, newUser]);
    resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="Container">
      <div className="Container__items">
        <h2 className="Container__title">Register Form</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationScheme}
          validateOnChange={false}
          validateOnBlur={true}
        >
          {(formik) => {
            return (
              <Form className="Container__form">
                <Field
                  className="Container__email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  id="email"
                  required
                />
                <ErrorMessage name="email" component="p" />
                <Field
                  className="Container__username"
                  placeholder="Username"
                  name="username"
                  type="username"
                  id="username"
                  required
                />
                <ErrorMessage name="username" component="p" />
                <Field
                  className="Container__password"
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                />
                <ErrorMessage name="password">
                  {(errMsg) => (
                    <div className="error">
                      <p>{errMsg}</p>
                    </div>
                  )}
                </ErrorMessage>

                <input
                  className="Container__submit"
                  type="submit"
                  value="Register"
                />
              </Form>
            );
          }}
        </Formik>
      </div>
      <hr />
      <div className="Container__users">
        <ul>
          {users.map((user) => (
            <li key={user.id} className="Container__user">
              <h3>
                <span className="Container__span">Username:</span>{" "}
                {user.username}
              </h3>
              <h3>
                <span className="Container__span">Email:</span> {user.email}
              </h3>
              <h3>
                <span className="Container__span">Password:</span>{" "}
                {showPassword ? user.password : "**********"}{" "}
                <button
                  className="Container__button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
