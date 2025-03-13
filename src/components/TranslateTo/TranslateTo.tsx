import { TranslateLayoutCard } from '../TranslateLayoutCard/TranslateLayoutCard'
import { TranslateControls } from '../TranslateControls/TranslateControls'

export function TranslateTo() {
  return (
    <TranslateLayoutCard disableInput>
      <TranslateControls />
    </TranslateLayoutCard>
  )
}
