import { createContext, useContext, useState } from 'react'
import { TranslatetorState } from '../models/TranslatetorState'

const TranslatetorContext = createContext<TranslatetorState | undefined>(
  undefined
)

export function useTranslatetorContext() {
  const context = useContext(TranslatetorContext)
  if (context === undefined) {
    throw new Error(
      'useTranslatetorContext must be used within a TranslatetorProvider'
    )
  }

  return context
}

function TranslatetorProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) {
  const [inputText, setInputText] = useState('')
  const [langPair, setLangPair] = useState('en|es')
  const [result, setResult] = useState('')

  return (
    <TranslatetorContext.Provider
      value={{
        inputText,
        langPair,
        result,
        setInputText,
        setLangPair,
        setResult,
      }}
    >
      {children}
    </TranslatetorContext.Provider>
  )
}

export default TranslatetorProvider
