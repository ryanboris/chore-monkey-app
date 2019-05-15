import React from 'react'
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../Session'

const HomePage = () => (
  <div>
    <h1>Home Page: For AuthEyes only!</h1>
  </div>
)

const condition = authUser => !!authUser

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(HomePage)
