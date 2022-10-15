import React from 'react'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'

export type ConverterCardProps = {
  label: string
}

export const ConverterCard = ({ label }: ConverterCardProps) => {
  return <ConverterCardStyle>{label}</ConverterCardStyle>
}

const ConverterCardStyle = styled.div`
  width: 27.5rem;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundPurple};
  border-radius: 8px;
  border: solid 2px ${colors.black};
`
