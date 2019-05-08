import React from 'react';
import MessageFormContainer from './message_form_container';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    // TODO: add action that updates global state with local state
    this.state = {
      messages: []
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      {
        channel: "ChatChannel"
      },
      {
        received: (data) => {
          this.setState({
            messages: this.state.messages.concat(
              {
                body: data.message,
                sender: data.sender,
                timestamp: data.timestamp
              }
            )
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    )
  }

  componentDidUpdate() {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  render() {
    let messageList = this.state.messages.map((message, idx) => {
      return (
        <li key={idx}>
          <div className="message-sender">
            <div className="message-sender-name">
              {message.sender}
            </div>
            <div className="message-sender-time">
              {message.timestamp}
            </div>
          </div>
          <div className="message-content">
            <pre>{message.body}</pre>
          </div>
          <div ref={this.bottom} />
        </li>
      )
    });
    
    return (
      <div className="chatroom-container">
        <ul className="message-list" scrolling='no'>
          {messageList}
        </ul>
        <MessageFormContainer />
      </div>
    )
  }
}

export default ChatRoom