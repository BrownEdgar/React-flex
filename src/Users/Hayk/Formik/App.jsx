import { ErrorMessage, Field, Form, Formik } from "formik"
import {useState} from "react"
import {object,string} from "yup"
import "./App.scss"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const initialValues = {
    email: "",
    username: "",
    password: ""
}

const validationSchema = object({
    email: string().email().required(),
    username: string().min(2).max(20).required(),
    password: string().matches(/^[A-Z]/).matches(/\d/,"password must by contain number").required()
})
export default function App() {
    const [users, setUsers] = useState([])
  const [passwordVisibility, setPasswordVisibility] = useState(null)

    const handleSubmit = (values,{resetForm}) =>{
        const newUsers = {
            id: Date.now(),
            ...values
        }
        setUsers([...users,newUsers])
        resetForm()    
    }

    const showPassword = (id) => {
        setPasswordVisibility(id)
      }
  return (
    <div  className="Container">
        <Formik 
        initialValues={initialValues}
         onSubmit={handleSubmit}
         validationSchema={validationSchema}
         validateOnChange={false}
         validateOnBlur={true}
        >
            {
                () => {
  
                    return (
                        <Form>

                            <h3>Email</h3>
                        <Field name="email" type="email" id="email" required/>
                        <ErrorMessage name="email" component="p"/>
                        <h3>user Name</h3>
                        <Field name="username" type="username" id="username" required/>
                        <ErrorMessage name="username" component="p"/>
                        <h3>Password</h3>
                        <Field name="password" type="password" id="password" required/>
                        <ErrorMessage name="password" component="p"/>
                        <input type="submit"  value="Save"/>
                        </Form>   
                    )
                }
            }
        </Formik>
        <div className="User">
            {
                users.map(elem => {
                    return (
                        <div className="User_elem" key={elem.id}>
                             <h1><span>Email: {elem.email}</span></h1>
                             <h1><span>Username: {elem.username}</span></h1>
                             <h1><span>Password: {
                              passwordVisibility === elem.id
                               ? elem.password 
                               : "*".repeat(10)
                             }</span></h1>
                             <button >
                                {
                                passwordVisibility === elem.id
                                 ?  <AiFillEye onClick={()=> {showPassword(null)  }}/>
                                 : <AiFillEyeInvisible onClick={()=>{showPassword(elem.id)}}/> 
                                }
                             </button>       
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}
