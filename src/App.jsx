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
      messages: []
    }
  }

  newMessage = (username, content) => {
    const message = { username, content };
    const jsonMsg = JSON.stringify(message); //prepare message for srvr
    this.socket.send(jsonMsg) // send msg to srvr
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001"); //create socket
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.setState({
        messages: [...this.state.messages, message]
        //                    \/ /\
        // messages: this.state.messages.concat(message)
      })
    }
    this.socket.onerror = function(error) {
      console.error('Web Socket Error', error);
    }
  }

  componentWillUnmount(){
    console.log('App::componentWillUnmount');
    this.socket = null;
  }

  render () {
    return (
      <div>
        <Navbar />
        <MessageList messages={ this.state.messages } />
        <ChatBar username={ this.state.currentUser.username } newMessage={ this.newMessage } content=""/>
      </div>
    );
  }
}

export default App;


  // componentDidMount() {
  //   console.log('componentDidMount <App />');
  //   setTimeout(() => {
  //     console.log('Simulating incoming message');
  //     const newMessage = {
  //       // id: 3,
  //       // username: 'Michelle',
  //       // content: 'hehehe'
  //     };
  //     const messages = this.state.messages.concat(newMessage)
  //     this.setState({ messages: messages })
  //   }, 3000);
  // }
