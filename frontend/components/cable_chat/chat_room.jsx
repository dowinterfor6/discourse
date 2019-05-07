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
    console.log(this.bottom);
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
                sender: data.sender
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
          {message.sender} said:
          {message.body}
          <div ref={this.bottom} />
        </li>
      )
    });
    
    return (
      <div className="chatroom-container">
        <div>ChatRoom</div>
        <ul className="message-list">
          {messageList}
        </ul>
        <MessageFormContainer />
      </div>
    )
  }
}

export default ChatRoom