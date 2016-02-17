import React from 'react'

import { Link } from 'react-router'
import { Row, Nav, NavItem } from 'react-bootstrap'

import Header from '../../shared/Header.jsx'
import Footer from '../../shared/Footer.jsx'

const Groups = ({}, {}) => {
  return <div>
    <Header title='My Groups'/>
    <Row>
      <Nav className="nav nav-pills nav-stacked">
        <NavItem><Link to="/messageboard">Messages</Link></NavItem>
        <NavItem disabled>Calendar</NavItem>
        <NavItem disabled>Files</NavItem>
        <NavItem disabled>Group Profile</NavItem>
      </Nav>
    </Row>
    <Footer/>
  </div>
}

export default Groups
