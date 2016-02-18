import React, { PropTypes } from 'react'

import { Row, Well } from 'react-bootstrap'

import MessageInput from './MessageInput.jsx'
import MessageList from './MessageList.jsx'
import UserInput from './UserInput.jsx'

import Header from '../../../shared/Header.jsx'
import Footer from '../../../shared/Footer.jsx'

const MessageBoard = ({}, { store }) => {
  return <div>
    <Header title="Chat"/>
      <Row>
        <UserInput />
        <MessageList chat={store.getState().chat}/>
        <MessageInput store={store}/>
      </Row>
    <Footer/>
  </div>
}

MessageBoard.contextTypes = {
  store: PropTypes.object.isRequired
}

export default MessageBoard
