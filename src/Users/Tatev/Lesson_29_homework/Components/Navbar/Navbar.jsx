import { Link } from 'react-router-dom'
import './Navbar.scss'
import { LOCALES } from '../../i18n/locales'
import { useContext, useState } from 'react'
import { LanguageContext } from '../Layouts'

export default function Navbar() {
  const value = useContext(LanguageContext)

  const [photos] = useState({
    ARMENIAN: "./src//Users//Tatev//Lesson_29_homework//Components//Photos/Armenian.webp",
    RUSSIAN: "./src//Users//Tatev//Lesson_29_homework//Components//Photos/Russian.png",
    ENGLISH: "./src//Users//Tatev//Lesson_29_homework//Components//Photos/English.png"
  })

  const handleClick = (language) => {
    value.setLanguages(LOCALES[language])
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="error">Blog</Link>
          </li>
          <li>
            <Link to="error">Projects</Link>
          </li>
          <li>
            <Link to="error">Illustration</Link>
          </li>
          <li>
            <Link to="error">GitHub</Link>
          </li>
        </ul>
      </nav>
      <div className='languages'>
        {
          Object.keys(LOCALES).map(elem => {
            return(
              <div key ={elem} className='language' onClick={() => handleClick(elem)}>
                <img src={photos[elem]} alt="" />
                <a>{elem}</a>
              </div>
            )
          })
        }
      </div>
    </header>
  )
}
