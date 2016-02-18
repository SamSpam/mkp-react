import React, { PropTypes } from 'react'

import { form, Input, Modal, Button } from 'react-bootstrap'

const setUser = (e) => {
  if (e.keyCode === 13) {
    const input = document.getElementById('userName')
    store.dispatch( { type: 'SET_USER', username: input.value }, chat[])

    input.value = ''
    input.focus()
  }

const UserInput = ({ store }, {}) => {
  return <div>
    <Modal show={this.state.showModal}>
      <Modal.Header>
        <Modal.Title>Username</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="userName">
          <Input
          id='userName'
          type="text"
          placeholder="Enter username here."
          onKeyUp={setUser}
          />
          <div>Hit Enter to submit</div>
        </div>
      </Modal.Body>
    </Modal>
  </div>
}

UserInput.propTypes = {
  store: PropTypes.object.isRequired
}

export default UserInput
