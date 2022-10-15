import React from 'react'
import styled from '@emotion/styled'

type TextBoxProps = {
  canInput: boolean
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextBox = ({ canInput, onChange }: TextBoxProps) => {
  return (
    <TextArea readOnly={!canInput} onChange={(e) => onChange && onChange(e)} />
  )
}

const TextArea = styled.textarea`
  width: 400px;
  height: 100px;
  border: 2px solid #000;
`
