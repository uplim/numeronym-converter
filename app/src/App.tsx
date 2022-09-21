import React from 'react'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyle'
import { TextBox } from './components/TextBox'
import { Button } from './components/Buttons/Button'

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <div>
        <TextBox canInput={true} />
        <TextBox canInput={false} />
      </div>
    </>
  )
}

export default App
