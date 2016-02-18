import React, { PropTypes } from 'react'

import { Grid } from 'react-bootstrap'

const App = ({ children }, { store }) => {
  console.log('store', store.getState())
 return <Grid fluid width="device-width">
    {children}
 </Grid>
}

App.contextTypes = {
  store: PropTypes.object.isRequired
}

export default App
