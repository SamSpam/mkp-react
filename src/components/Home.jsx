import React from 'react'

import { Link } from 'react-router'
import { Row, Nav, NavItem } from 'react-bootstrap'

import Header from './shared/Header.jsx'
import Footer from './shared/Footer.jsx'

const Home = ({}, {}) => {
  return <div>
    <Header title='Home'/>
    <Row>
      <Nav className="nav nav-pills nav-stacked">
        <NavItem><Link to="/group">My Groups</Link></NavItem>
        <NavItem disabled>Calendar</NavItem>
        <NavItem disabled>Newsfeed</NavItem>
        <NavItem disabled>Files</NavItem>
      </Nav>
    </Row>
    <Footer/>
  </div>
}

export default Home
