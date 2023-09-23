import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react'
import { object, string } from 'yup'

import './App.scss'

const initialValues = {
  email: '',
  username: '',
  password: ''
}


const validationSchema = object({
  email: string().email().required(),
  username: string().min(2).max(20).required(),
  password: string().matches(/^[A-Z]/).matches(/\d/, 'password must be have number').required()
})

export default function App() {
  const [users, setUsers] = useState([])

  const handleSubmit = (values, {resetForm}) => {
    const newUser = {
      id: Date.now(),
      ...values,
    }
    setUsers([...users, newUser])
    resetForm()
  }

  return (
    <div className='Container'>
      {/* <form>
        <input type="text" name="email" id="email" required />
        <input type="password" name="password" id="password" required />
        <input type="submit" value="register" />
      </form> */}
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
                <Field name="email" type="email" id="email" required />
                <ErrorMessage name='email' component='p'/>
                <Field name="username" type="username" id="username" required />
                <ErrorMessage name='username' component='p'/>
                <Field name="password" type="password" id="password" required />
                <ErrorMessage name='password'>
                  {
                    (errMsg) => {
                      <div className='error'>
                        <span>{errMsg}</span>
                      </div>
                    }
                  }
                </ErrorMessage>
                <input type="submit" value="Register" />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
