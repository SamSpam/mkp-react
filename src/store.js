import { createStore } from 'redux'

import io from 'socket.io-client'

const host   = window.location.origin.replace(/^http/, 'ws')

const socket = io.connect(host)

const reducer = (state = { chat: [] }, action) => {
 switch (action.type) {
   case 'SEND':
     socket.emit('message', { message: action.message })
     socket.emit('username', { username: action.username })
     return { chat: [ ...state.chat, action.message ] }

   case 'RECEIVE':
     return { chat: [ ...state.chat, action.message ] }
   default:
     return state
 }
}

const store = createStore(reducer)

socket.on('message', (data) => {
 store.dispatch({ type: 'RECEIVE', message: data.message })
})

export default store
