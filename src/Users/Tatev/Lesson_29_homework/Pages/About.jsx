import { useContext } from "react"
import Provider from "../i18n/Provider"
import Translate from "../i18n/Translate"
import "./About.scss"
import { LanguageContext } from "../Components/Layouts"

export default function About() {

  const value = useContext(LanguageContext)
  
  return (
    <Provider locale = {value.languages}>
      <div className="Container">
        <h1>{Translate("title")}</h1>
        <p>{Translate("desc1")}</p>
        <p>{Translate("desc2")}</p>
      </div>
    </Provider>
  )
}
