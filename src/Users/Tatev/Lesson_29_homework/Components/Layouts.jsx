
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import { createContext, useState } from 'react'
import { LOCALES } from '../i18n/locales'

export const LanguageContext = createContext("")

export default function Layouts() {
  const [languages, setLanguages] = useState(LOCALES.ENGLISH)

  return (
    <div>
      <LanguageContext.Provider value ={{languages, setLanguages}}>
        <Navbar/>
        <Outlet />
      </LanguageContext.Provider>

    </div>
  )
}
