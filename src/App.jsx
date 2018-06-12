import React, { Component } from 'react';
import Navbar from './navbar.jsx';
import Messages from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Messages />
        <ChatBar />
      </div>
    );
  }
}

export default App;
