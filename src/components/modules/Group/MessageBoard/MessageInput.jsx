import React from 'react'

import { form, Input, Button, buttonAfter } from 'react-bootstrap'

const innerButton = <Button>Send</Button>;

const MessageInput = ({}, {}) => {
  return <div>
      <form>
        <Input type="textarea" placeholder="Compose message... "  buttonAfter={innerButton} />
      </form>
  </div>
};

export default MessageInput;
