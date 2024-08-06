"use client"
import {createContext, useState} from 'react'

export const LangContext = createContext()

function LanguageContextProvider({children}) {
  const [language,setLanguage]= useState("en")

  const changeLang = (lang) => setLanguage(lang) 

  return (
    <LangContext.Provider value={{language,changeLang}}>{children}</LangContext.Provider>
  )
}

export default LanguageContextProvider