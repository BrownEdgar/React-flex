import { useState } from "react";
import Provider from "./Provider";
import { LOCALES } from "./locale";
import Translate from "./Translate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import './App.css'


export default function App() {
  const [languages, setLanguages] = useState(LOCALES.English)
  const handleChange = (e) => {
    setLanguages(LOCALES[e.target.value])
  }
  return (
    <Provider locale={languages}>
      <FontAwesomeIcon icon={faGlobe} style={{ color: "#ebe5e7", }} className="icon" />
      <select name="language" id="language" onChange={handleChange}>
        <option value="English">English
        </option>
        <option value="Russian">Russian</option>
        <option value="Armenian">Armenian</option>
      </select>
      <div className="container">
        <h1 className="title">{Translate('title')}</h1>
        <p className="desc">{Translate('desc')}</p>
        <p className="desc1">{Translate('desc1')}</p>
      </div>
    </Provider>
  )
}
