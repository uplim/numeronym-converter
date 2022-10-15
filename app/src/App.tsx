import React from 'react'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyle'
import { TextBox } from './components/TextBox'
import { useIO } from './hooks/useIO'
import { Button } from './components/Buttons'
import { convertSentence } from './utils/convertSentence'
const App = () => {
  const { input, output, onChange } = useIO()

  return (
    <>
      <Global styles={globalStyle} />
      <div>
        <h1>ぬめろにむこんばーた</h1>
        <TextBox canInput={true} onChange={onChange} />
        <Button label={'へんかん'} onClick={() => convertSentence()} />
        <TextBox canInput={false} />
      </div>
    </>
  )
}

export default App
