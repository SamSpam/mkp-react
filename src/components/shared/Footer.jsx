import React from 'react'

import { Link } from 'react-router'
import { Button, Glyphicon, Row } from 'react-bootstrap'

const fStyle = {marginLeft: -15}
const fbStyle = {width: '25%', float: 'left'}
const bStyle = {borderRadius: 0, fontSize: '25px', color: '#2196f3'}

const Footer = ({}, {}) => {
  return  <footer className="footer" style={fStyle}>
      <div className="footer-button" style={fbStyle}>
        <Link to="/">
          <Button bsStyle="default" bsSize="lg" block style={bStyle}>
            <Glyphicon glyph = "home" />
            <div style={{fontSize:14, marginTop: -2}}>Home</div>
          </Button>
        </Link>
      </div>
      <div className="footer-button" style={fbStyle}>
        <Link to="/messageboard">
          <Button bsStyle="default" bsSize="lg" block style={bStyle}>
            <Glyphicon glyph = "envelope" />
            <div style={{fontSize:14, marginTop: -2}}>Chat</div>
          </Button>
        </Link>
      </div>
      <div className="footer-button" style={fbStyle}>
        <Link to="/noticeboard">
          <Button bsStyle="default" bsSize="lg" block style={bStyle}>
            <Glyphicon glyph = "info-sign" />
            <div style={{fontSize:14, marginTop: -2}}>News</div>
          </Button>
        </Link>
      </div>
      <div className="footer-button" style={fbStyle}>
        <Link to="/profile">
          <Button bsStyle="default" bsSize="lg" block style={bStyle}>
            <Glyphicon glyph = "user" />
            <div style={{fontSize:14, marginTop: -2}}>User</div>
          </Button>
        </Link>
      </div>
  </footer>
}

export default Footer
