import React, { PropTypes } from 'react'

import { form, Input, ButtonInput } from 'react-bootstrap'

import { addIndex, map } from 'ramda'

const mapIndexed = addIndex(map)

const MessageList = ({ chat }, {}) => {
  const chatMessages = mapIndexed((m, i) => {
    return <li key={i}>{m}</li>
  }, chat)

  return <ul>{chatMessages}</ul>
}

MessageList.propTypes = {
  chat: PropTypes.array
}

export default MessageList
