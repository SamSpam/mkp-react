import React from 'react'

import { Link } from 'react-router'
import { Row, Col, Grid, Image } from 'react-bootstrap'

import Header from '../../shared/Header.jsx'
import Footer from '../../shared/Footer.jsx'

const Name="Sam Dyson"

const Profile = ({}, {}) => {
  return <div>
    <Header title="Profile"/>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image src="/sam-profile.jpg" circle />
          </Col>
          <Col xs={6} md={4}>
            {Name}
          </Col>
        </Row>
      </Grid>
    <Footer/>
  </div>
}

export default Profile
