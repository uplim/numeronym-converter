import React from 'react'
import { Link } from 'react-router-dom'
import { TextBox } from '@/components/TextBox'

export const Home = () => {
  return (
    <>
      <Link to={`/about/`}>/about</Link>
      <div>
        <h1>ぬめろにむこんばーた</h1>
        <TextBox canInput={true} />
        <TextBox canInput={false} />
      </div>
    </>
  )
}
