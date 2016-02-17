import React from 'react'

import { Row } from 'react-bootstrap'

const Header = ({ title }, {}) => {
  return <Row componentClass="header">
    <div className="panel panel-default">
      <div className="panel-body">
        <h1>{ title || 'MKP Connect' }</h1>
      </div>
    </div>
  </Row>
}

export default Header
