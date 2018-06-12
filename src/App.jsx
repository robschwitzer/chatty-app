import React, { Component } from 'react';
import Navbar from './navbar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      currentUser: { name: 'Bob' },
      messages: [
        { id: 1,
          username: "Bob",
          content: "i am bob and this is me message"
        },
        { id: 2,
          username: "Anonymous",
          content: "nice message Bob"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        {/*<Message user={this.state.currentUser} message={`i am ${this.state.currentUser} and this is me message`}/>*/}
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser.name}/>
      </div>
    );
  }
}

export default App;
