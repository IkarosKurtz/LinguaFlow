import { TranslateLayoutCard } from '../TranslateLayoutCard/TranslateLayoutCard'
import { TranslateControls } from '../TranslateControls/TranslateControls'

export function TranslateFrom() {
  return (
    <TranslateLayoutCard>
      <TranslateControls enableTranslate />
    </TranslateLayoutCard>
  )
}
