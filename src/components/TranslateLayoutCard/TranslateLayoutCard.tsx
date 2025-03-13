import './TranslateLayoutCard.css'
import { useTranslatetorContext } from '../../contexts/TranslatetorProvider'
import { getTranslation } from '../../utils/translateService'

interface TranslateLayoutCardProps {
  children: React.ReactNode | React.ReactNode[]
  disableInput?: boolean
}

export function TranslateLayoutCard({
  children,
  disableInput,
}: TranslateLayoutCardProps) {
  const { inputText, setInputText, result, setLangPair, langPair, setResult } =
    useTranslatetorContext()

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault()
    if (e.target.value.length > 500) {
      return
    }

    setInputText(e.target.value)
  }

  function handleLangChange(e: React.MouseEvent<HTMLParagraphElement>) {
    const lang = e.currentTarget.dataset.lang
    if (!disableInput) {
      const toLang = langPair.split('|')[1]
      setLangPair(`${lang}|${toLang}`)
      return
    }

    const fromLang = langPair.split('|')[0]
    setLangPair(`${fromLang}|${lang}`)
  }

  function translateWithKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey && !disableInput) {
      e.preventDefault()
      getTranslation(inputText, langPair, setResult)
    }
  }

  return (
    <section className='card'>
      <div className='langauge-selector'>
        <p
          data-lang='es'
          onClick={handleLangChange}
        >
          Español
        </p>
        <p
          data-lang='en'
          onClick={handleLangChange}
        >
          Ingles
        </p>
      </div>
      <section className='content'>
        <div className='h-full'>
          <textarea
            disabled={disableInput}
            value={disableInput ? result : inputText}
            onChange={handleInput}
            onKeyDown={translateWithKey}
            placeholder={!disableInput ? 'Type here...' : ''}
          />
        </div>
        {!disableInput && (
          <div className='character-counter-container'>
            <p className='text-text-950/50'>{inputText.length}/500</p>
          </div>
        )}
        {children}
      </section>
    </section>
  )
}
