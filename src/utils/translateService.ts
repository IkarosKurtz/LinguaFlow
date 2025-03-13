import { Translation } from '../models/translationResponse'

export async function getTranslation(
  inputText: string,
  langPair: string,
  callback: (result: string) => void
) {
  fetch(
    `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${langPair}`,
    { method: 'GET' }
  )
    .then((response) => response.json())
    .then((data: Translation) => {
      callback(data.responseData.translatedText)
    })
    .catch((error) => {
      console.error(error)
    })
}
