import { Dispatch, SetStateAction } from 'react'

export interface TranslatetorState {
  inputText: string
  langPair: string
  result: string
  setInputText: Dispatch<SetStateAction<string>>
  setLangPair: Dispatch<SetStateAction<string>>
  setResult: Dispatch<SetStateAction<string>>
}
