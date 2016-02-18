import React, { PropTypes } from 'react'

import { form, Input, Button, buttonAfter, Well } from 'react-bootstrap'

const sendMessage = (e) => {
  if (e.keyCode === 13) {
    const input = document.getElementById('message-input')
    store.dispatch( { type: 'SEND', message: input.value })

    input.value = ''
    input.focus()
  }
}

const MessageInput = ({ store }, {}) => {
  return <div>
    <Well className="message-input">
        <Input
          id='message-input'
          type="textarea"
          placeholder="Compose message..."
          onKeyUp={sendMessage}
        />
        <div>Press Enter to Send</div>
        </Well>
      </div>
}

MessageInput.propTypes = {
  store: PropTypes.object.isRequired
}

export default MessageInput
