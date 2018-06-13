import React, { Component } from 'react';
import Navbar from './navbar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor (props) {
    super ()
    this.state = {
      currentUser: { name: this.username },
      messages: [
        { id: 1,
          username: "Bob",
          content: "i am bob and this is me message"
        },
        { id: 2,
          username: "Anonymous",
          content: "nice message Bob 🙄"
        }
      ]
    }
  }

  newMessage = (username, content) => {
    const message = { username, content, id: Date.now() };
    const messages = this.state.messages.concat(message);
    this.setState({ messages });
  }

  render () {
    return (
      <div>
        <Navbar />
        <MessageList messages={ this.state.messages } />
        <ChatBar user={ this.state.currentUser.name } newMessage={ this.newMessage } content=""/>
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
