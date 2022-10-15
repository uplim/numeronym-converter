import { useState } from 'react'
import { splitSentence } from '@/utils/splitSentence'

export const invertSentence = () => {
  // 入力と出力の定義
  const [answer, setAnswer] = useState('')
  const [sentence, setSentence] = useState('')

  const arr = splitSentence(sentence)
  // arrをゴニョゴニョして最終これを返す
  setAnswer('are you a baseball fun?')

  return {
    answer,
    setSentence
  }
}
