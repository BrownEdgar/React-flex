import { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import {object, string} from "yup"
import Users from "./Components/Users"
import classNames from 'classnames'
import './App.scss'


const initialValues = {
	email: "",
	userName: "",
	password: ""
}

const validationSchema = object({
	email: string().email().required(),
	userName: string().required(),
	password: string().matches(/^[A-z]/, "Password must be contain uppercase").matches(/\d/, "Password must be contain number").required()
})

export default function App() {
	const [users, setUsers] = useState([])
	const [email, setEmail] = useState(true)

	const handleSubmit = (values, {resetForm}) =>{
		const newUser = {
			id: Date.now(),
			...values
		}
		const emails = users.map(user => user.email)
		if(emails.includes(newUser.email)){
			setUsers([...users]) 
			setEmail(false)
		}else{
			setUsers([...users, newUser])
			setEmail(true)
		}
		resetForm()
	}

  return (
    <div className="Container">
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
				validateOnChange={false}
				validateOnBlur={true}>
				{
					() => {
						return (
							<Form>
								<p>Email</p>
								<Field name="email" type="email" id="email" />
								<p className={classNames('error', {
									hide: email === true
								})}>this email is already exist!</p>
								<ErrorMessage name="email" component="p" className="error"/>
								<p>Username</p>
								<Field name="userName" type="userName" id="userName"/>
								<ErrorMessage name="userName" component="p" className="error"/>
								<p>Password</p>
								<Field name="password" type="password" id="password"/>
								<ErrorMessage name="password" component="p" className="error"/>
								<input type="submit" value ="Save" className="save"/>
							</Form>
						)
					}
				}
			</Formik>
			<hr />
			<Users users={users}/>
		</div>
  )
}
