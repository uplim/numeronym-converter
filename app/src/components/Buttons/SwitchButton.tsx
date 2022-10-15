import React from 'react'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import { IconContext } from 'react-icons'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { ConverterCard } from '../Cards'


export const SwitchButton = () => {
  return (
    <>
      <ConverterCard label={'a'} />
      <SwitchButtonStyle>
        <IconContext.Provider value={{ size: '2rem' }}>
          <HiOutlineSwitchHorizontal width="2rem" />
        </IconContext.Provider>
      </SwitchButtonStyle>
    </>
  )
}

const SwitchButtonStyle = styled.button`
  width: 5.8rem;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 8px;
  border: solid 2px ${colors.black};
  -webkit-transition: width 2s ease, height 2s ease;
  -moz-transition: width 2s ease, height 2s ease;
  -o-transition: width 2s ease, height 2s ease;
  -ms-transition: width 2s ease, height 2s ease;
  transition: width 0.2s ease, height 0.2s ease;
  &:active {
    width: 6rem;
    height: 3.8rem;
    background-color: ${colors.backgroundPurple};
  }
`
