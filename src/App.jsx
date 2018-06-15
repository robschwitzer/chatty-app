import React, { Component } from 'react';
import Navbar from './navbar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: {
        username: 'Anonymous🤓'
      },
      messages: [],
      counter: 0
    }
  }

  newMessage = (username, content, type) => {
    const message = { username, content, type };
    const jsonMsg = JSON.stringify(message); //prepare message for srvr
    this.socket.send(jsonMsg) // send msg to srvr
  }

  updateCount() {
    let currentCount = this.state.counter;
    const jsonCount = JSON.stringify(count);
    this.socket.send(jsonCount)
  }

  componentDidMount() {
     //create socket
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      if(message.type === 'connect') {
        this.setState({
          counter: message.count
        })
      } else {
        this.setState({
          messages: [...this.state.messages, message],
           //                \/ = /\                  \\
          // messages: this.state.messages.concat(message)
        })
      }
    }
    this.socket.onerror = function(error) {
      console.error('Web Socket Error', error);
    }
  }

  componentWillUnmount(){
    this.socket = null;
  }

  render () {
    return (
      <div>
        <Navbar counter={ this.state.counter } />
        <MessageList messages={ this.state.messages } />
        <ChatBar username={ this.state.currentUser.username } newMessage={ this.newMessage } content=""/>
      </div>
    );
  }
}

export default App;