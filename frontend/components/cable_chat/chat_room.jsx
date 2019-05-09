import React from 'react';
import MessageFormContainer from './message_form_container';
import {withRouter} from 'react-router-dom';

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
          switch (data.type) {
            case 'message':
              this.setState({
                messages: this.state.messages.concat(
                  {
                    body: data.message.body,
                    sender: data.message.sender,
                    custom_timestamp: data.message.custom_timestamp
                  }
                )
              });
              break;
            case 'messages':
              this.setState({
                messages: Object.values(data.messages)
              });
              break;
          }
        },
        speak: function(data) {
          return this.perform("speak", data);
        },
        load: function() {
          return this.perform("load");
        }
      }
    )

    this.props.fetchChatHistory(this.props.match.params.id).then(
      (data) => {
        this.setState({messages: Object.values(data.messages)});
      }
    )
  }
  
  componentDidUpdate(prevProps) {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    };
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchChatHistory(this.props.match.params.id).then(
        (data) => {
          this.setState({ messages: Object.values(data.messages) });
        }
      )
    }
  }
  
  render() {
    let messageList;
    if (this.state.messages.length === 0) {
      messageList =
      <li>
        <div className="message-sender">
          <div className="message-sender-name">
            There seems to be no previous messages... you can call dibs on 'first'!
          </div>
        </div>
      </li>
    } else {
      messageList = this.state.messages.map((message, idx) => {
        return (
          <li key={idx}>
            <div className="message-sender">
              <div className="message-sender-name">
                {message.sender}
              </div>
              <div className="message-sender-time">
                {message.custom_timestamp}
              </div>
            </div>
            <div className="message-content">
              <pre>{message.body}</pre>
            </div>
            <div ref={this.bottom} />
          </li>
        )
      });
    }
    
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

export default withRouter(ChatRoom);