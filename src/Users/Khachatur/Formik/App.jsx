import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react'

import { object, string } from "yup"

import './App.scss'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const initialValues = {
  email: '',
  username: '',
  password: ''
}

const validationSchema = object({
  email: string().un,
  username: string()
    .min(2)
    .max(20)
    .required('required'),
  password: string()
    .matches(/^[A-Z]/, "mecatar tur")
    .matches(/\d/, "password must by contain number")
    .required("required")
})

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: 'abcd@mail.com',
      username: 'jhon',
      password: 'askdjashd236'
    }, {
      id: 2,
      email: 'abcd73625@gmail.com',
      username: 'Sebastian',
      password: 'AJShgdja67352'
    }
  ]);
  const [passwordVisibility, setPasswordVisibility] = useState(null)
  console.log(passwordVisibility)

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      id: Date.now(),
      ...values
    }
    setUsers([
      ...users,
      newUser
    ]);
    resetForm()
  }

  return (
    <div className='Container'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={true}>
        {(formik) => {

          return (
            <Form>
              <Field name="email" type="email" id="email" placeholder="EMail" required />
              <ErrorMessage name='email' component='p' />
              <Field
                name="username"
                type="username"
                id="username"
                placeholder="Username"
                required />
              <ErrorMessage name='username' component='p' />
              <Field
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                required />
              <ErrorMessage name='password' component='p' />
              <input type="submit" value="register" />
            </Form>
          )
        }
        }
      </Formik>
      <hr />
      <div className='Users'>
        {users.map(user => {
          return (
            <div className='Users__user' key={user.id}>
              <h1>
                <span>EMail: {user.email}</span>
              </h1>
              <h1>
                <span>Username: {user.username}</span>
              </h1>
              <h1>
                <span>Password: {
                  passwordVisibility === user.id
                    ? user.password
                    : "*".repeat(10)}
                </span>
              </h1>
              <button >
                {passwordVisibility === user.id
                  ? <AiFillEyeInvisible onClick={() => setPasswordVisibility(null)} />
                  : <AiFillEye onClick={() => { setPasswordVisibility(user.id) }} />}
              </button>

            </div>
          )
        })
        }
      </div>
    </div>
  )
}
