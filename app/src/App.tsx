import React from 'react'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyle'
import { TextBox } from './components/TextBox'
import { SwitchButton } from './components/Buttons'

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <div>
        <h1>ぬめろにむこんばーた</h1>
        <SwitchButton />
        <TextBox canInput={true} />
        <TextBox canInput={false} />
      </div>
    </>
  )
}

export default App
