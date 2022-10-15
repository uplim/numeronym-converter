import React from 'react'
import { Link } from 'react-router-dom'
import { TextBox } from '@/components/TextBox'
import { useIO } from '@/hooks/useIO'

export const Home = () => {
  const { input, output, onChange } = useIO()
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
