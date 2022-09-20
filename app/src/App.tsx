import React from 'react'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/global-style'

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <div>あああ</div>
    </>
  )
}

export default App
