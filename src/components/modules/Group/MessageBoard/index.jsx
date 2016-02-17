import React from 'react'

import { Row } from 'react-bootstrap'

import MessageInput from './MessageInput.jsx'
import MessageList from './MessageList.jsx'
import Messenger from './Messenger.jsx'
import Header from '../../../shared/Header.jsx'
import Footer from '../../../shared/Footer.jsx'

const MessageBoard = ({}, {}) => {
  return <div>
    <Header title="Chat"/>
      <Row>
        <MessageList />
        <MessageInput />
      </Row>
    <Footer/>
  </div>
}

export default MessageBoard
