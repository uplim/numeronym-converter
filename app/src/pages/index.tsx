import React from 'react'
import { Link } from 'react-router-dom'
import { TextBox } from '@/components/TextBox'
import { useIO } from '@/hooks/useIO'
import { Button } from '@/components/Buttons'
import { convertSentence } from '@/utils/convertSentence'

export const Home = () => {
  const { setOutput, onChange } = useIO()
  return (
    <>
      <Link to={`/about/`}>/about</Link>
      <div>
        <h1>ぬめろにむこんばーた</h1>
        <TextBox canInput={true} onChange={(e) => onChange(e)} />
        <Button label={'へんかん'} onClick={() => setOutput(convertSentence)} />
        <TextBox canInput={false} value={convertSentence()} />
      </div>
    </>
  )
}
