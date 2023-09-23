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
  username: string().min(2).max(20).required(),
  password: string().matches(/^[A-Z]/, "mecatar tur").matches(/\d/, "password must by contain number").required(),
})

export default function App() {
  const [users, setUsers] = useState([]);
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      id: Date.now(),
      ...values,
    }
    setUsers([...users, newUser]);
    resetForm()
  }

  const showPassword = () => {
    setPasswordVisibility(!passwordVisibility)
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
                <Field name="email" type="email" id="email" placeholder="EMail" required />
                <ErrorMessage name='email' component='p' />
                <Field name="username" type="username" id="username" placeholder="Username" required />
                <ErrorMessage name='username' component='p' />
                <Field name="password" type="password" id="password" placeholder="Password" required />
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
      <hr />
      <div className='Users'>
        {
            users.map(user => {
                return (
                    <div className='Users__user' key={user.id}>
                        <h1><span>EMail: {user.email}</span></h1>
                        <h1><span>Username: {user.username}</span></h1>
                        <h1>
                            <span>Password: {passwordVisibility ? user.password : "**********"}</span>
                            
                        </h1>
                        <button onClick={showPassword} type={passwordVisibility ? "text": "password"} >
                            {passwordVisibility ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </button>
                        
                        
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
