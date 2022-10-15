import { useState } from 'react'

export const useIO = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  return {
    input,
    output,
    setInput,
    setOutput,
    onChange
  }
}
