import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
  }
  render() {
    let username = <span className="message-username">{this.props.message.username}</span>;
    let content = <span className="message-content">{this.props.message.content}</span>;

  return (
    <div>
      {username}
      {content}
    </div>
    );
  }
}

export default Message;


// import React, { Component } from 'react';

// class Message extends Component {
//   render () {
//     return (
//       <div className="message">
//         <span className="message-username">{ this.props.message.user }</span>
//         <span className="message-content">{ this.props.message.content }</span>
//       </div>
//     );
//   }
// }

// export default Message;

