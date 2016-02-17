import React from 'react'

import { Grid } from 'react-bootstrap'

const App = ({ children }, {}) => {
 return <Grid fluid width="device-width">
    {children}
 </Grid>
}

export default App
