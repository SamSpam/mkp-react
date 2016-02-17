import React from 'react'

import { Row } from 'react-bootstrap'

import Header from '../../shared/Header.jsx'
import Footer from '../../shared/Footer.jsx'

const NoticeBoard = ({}, {}) => {
  return <div>
    <Header title='Notices'/>
      <Row>
        <div>NoticeBoard</div>
      </Row>
    <Footer/>
  </div>
}

export default NoticeBoard
