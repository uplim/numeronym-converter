import React from 'react'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'

export type ButtonProps = {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>
}

const ButtonStyle = styled.button`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 16px;
  border-radius: 100px;
`
