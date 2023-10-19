import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react'
import { object, string } from "yup"
import './App.scss'

const initialValues = {
  email: '',
  username: '',
  password: ''
}

const validationSchema = object({
  email: string().un,
  username: string().min(2).max(20).required(),
  password: string().matches(/^[A-Z]/, "mecatar tur").matches(/\d/, "password must by contain number").required(),
})

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      id: Date.now(),
      ...values,
    }
    setUsers([...users, newUser]);
    resetForm()
  }
  return (
    <div className='Container'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {
          (formik) => {
            return (
              <Form>
                <pre>
                  {JSON.stringify(formik.values, null, 1)}
                </pre>
                <pre>
                  errors:
                  {JSON.stringify(formik.errors, null, 1)}
                </pre>
                <Field name="email" type="email" id="email" required />
                <ErrorMessage name='email' component='p' />
                <Field name="username" type="username" id="username" required />
                <ErrorMessage name='username' component='p' />
                <Field name="password" type="password" id="password" required />
                <ErrorMessage name='password' >
                  {
                    (errMsg) => (
                      <div className='error'>
                        <span>{errMsg}</span>
                      </div>
                    )
                  }
                </ErrorMessage>
                <input type="submit" value="register" />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
