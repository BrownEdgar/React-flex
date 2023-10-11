import { Field, Form, Formik } from "formik";
import {string, object, array} from "yup"

const initialValues ={
  username: "",
  languages: [],
  gender: ""
}

const validationSchema = object(
  {
    username: string().required("required"),
    languages: array(),
    gender: string().oneOf(["male", "female"]).required()
  }
)

export default function App() {

  const handleSubmit =(values) => {
    console.log(values);
  }

  return (
    <div>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {
          (formik) => {
            return (
              <Form>
                <div>
                  <Field name="username" type ="text"/>
                </div>
                <div>
                  {
                    ["html", "css", "javascript", "react.js"].map((language, index) => {
                      return (
                        <p key ={language}>
                          <Field name="languages" type ="checkbox" value={`${language}`}/>
                          <span>{language}</span>
                        </p>
                      )
                    })
                  }

                  {/* <p>
                    <Field name="languages" type ="checkbox" value="html"/>
                    <span>HTML</span>
                  </p>
                  <p>
                    <Field name="languages" type ="checkbox" value="css"/>
                    <span>CSS</span>
                  </p>
                  <p>
                    <Field name="languages" type ="checkbox" value="javascript"/>
                    <span>JavaScript</span>
                  </p>
                  <p>
                    <Field name="languages" type ="checkbox" value="react.js"/>
                    <span>React.js</span>
                  </p> */}
                </div>

                <div>
                  <Field name="gender" type ="radio" value="male" checked/>
                  <span>Male</span>
                  <Field name="gender" type ="radio" value="female"/>
                  <span>Female</span>
                </div>
                <div>
                  <input type="submit" value="save"/>
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
