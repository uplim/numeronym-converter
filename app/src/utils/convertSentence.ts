import { useState } from 'react'
import { splitSentence } from '@/utils/splitSentence'
import { useIO } from '@/hooks/useIO'

export const convertSentence = () => {
  // 入力と出力の定義
  const [sentence, setSentence] = useState('')
  const { setOutput } = useIO()

  const arr = splitSentence(sentence)

  // arrをごにょごにょして最終これを返す
  setOutput('are you a b6l fun?')
}
