"use client"
import { LangContext } from '@/context/LanguageContext'
import {useContext} from 'react'

export default function useLangContext() {
  return useContext(LangContext)
}
