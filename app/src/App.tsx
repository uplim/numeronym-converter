import React from 'react'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyle'
import { TextBox } from './components/TextBox'

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <div>
        <h1>ぬめろにむこんばーた</h1>
        <TextBox canInput={true} />
        <TextBox canInput={false} />
      </div>
    </>
  )
}

export default App
