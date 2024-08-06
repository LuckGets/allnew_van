"use client"

import useLangContext from '@/hooks/useLangContext'
import React from 'react'
import { Button } from './ui/button'

function LanguageSwitcher() {
  const {language,changeLang} = useLangContext()

  return (
    <div>
      <Button onClick={() => changeLang(language === "en" ? "th" : "en")}>
        <p className={`scale-100 rotate-0 transition-all`}>{language.toUpperCase()}</p>
      </Button>
    </div>
  )
}

export default LanguageSwitcher