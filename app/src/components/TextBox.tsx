import React from 'react'
import styled from '@emotion/styled'

type TextBoxProps = {
  canInput: boolean
}

export const TextBox = ({ canInput }: TextBoxProps) => {
  return <TextArea readOnly={!canInput} />
}

const TextArea = styled.textarea`
  width: 400px;
  height: 100px;
  border: 2px solid #000;
`
