import './TranslateControls.css'

import { HiMiniSpeakerWave } from 'react-icons/hi2'
import { IoCopy } from 'react-icons/io5'
import { useTranslatetorContext } from '../../contexts/TranslatetorProvider'
import { getTranslation } from '../../utils/translateService'
import { IconContext } from 'react-icons'

interface TranslateControlsProps {
  enableTranslate?: boolean
}

export function TranslateControls({ enableTranslate }: TranslateControlsProps) {
  const { inputText, langPair, setResult, result } = useTranslatetorContext()

  function copyToClipboard() {
    if (enableTranslate) {
      navigator.clipboard.writeText(inputText)
      return
    }
    navigator.clipboard.writeText(result)
  }

  return (
    <div className='controls'>
      <div className='actions'>
        <IconContext.Provider value={{ className: 'icon' }}>
          <div onClick={copyToClipboard}>
            <IoCopy size={25} />
          </div>
          <div>
            <HiMiniSpeakerWave size={25} />
          </div>
        </IconContext.Provider>
      </div>
      {enableTranslate && (
        <button
          className='translate-button'
          onClick={() => getTranslation(inputText, langPair, setResult)}
        >
          Translate
        </button>
      )}
    </div>
  )
}
