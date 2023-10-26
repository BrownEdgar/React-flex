import { useState } from "react";
import Provider from "./i18n/Provider";
import Translate from "./i18n/Translate";
import { LOCALES } from "./i18n/locales";


export default function App() {
  const [languages, setLanguages] = useState(LOCALES.ENGLISH)

  const handleChange =(e) => {
    setLanguages(LOCALES[e.target.value])
  }

  return (
    <Provider locale = {languages}>
      <div>
        <select name="language" id="language" onChange={handleChange}>
          {
            Object.keys(LOCALES).map(elem => {
              return(
                <option value={elem} key ={elem}>{elem}</option>
              )
            })
          }
        </select>
        <h1>{Translate("title", {subtitle: "secret text"})}</h1>
        <p>{Translate("description")}</p>
      </div>
    </Provider>
  )
}
