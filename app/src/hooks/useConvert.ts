import { useState } from 'react'
import { splitSentence } from '@/utils/splitSentence'

export const useConvert = () => {
  // 入力と出力の定義
  const [sentence, setSentence] = useState('')
  const [answer, setAnswer] = useState('')

  const arr = splitSentence(sentence)

  // arrをごにょごにょして最終これを返す
  setAnswer('are you a b6l fun?')

  return {
    answer,
    setSentence
  }
}
