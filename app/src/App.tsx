import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/index'
import { About } from '@/pages/about'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyle'

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/about/`} element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
