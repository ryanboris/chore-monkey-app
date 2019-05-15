/** @jsx jsx */
/* eslint-disable-next-line */
import React from 'react'
import { firestore } from './firebase/firestore'
import { fb, t, g, gh } from './svg/imports'
import { css, jsx } from '@emotion/core'

const App = () => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <img src={fb} alt="facebook login" />
      <img src={t} alt="twitter login" />
      <img src={g} alt="google login" />
      <img src={gh} alt="github login" />
    </div>
  )
}

export default App
