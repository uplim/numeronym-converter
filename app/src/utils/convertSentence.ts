import { splitSentence } from '@/utils/splitSentence'
import { useIO } from '@/hooks/useIO'

export function convertSentence() {

  /* TODO: splitSentenceを使う
  const{input} = useIO()
  const arr = splitSentence(input) */

  const arr = ["Are","you", "a","baseball", "fun?"]
  
  return getConvertedWords(arr).join(' ')
  }

//単語をヌメロニム化
const getConvertedWords = (words: string[]) =>{
    const convertedWords: string[] = []
    words.forEach((word) => {
        if (word.length < 4) {
            convertedWords.push(word)
            return
        }
        convertedWords.push(word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1))
    })
    return convertedWords
}