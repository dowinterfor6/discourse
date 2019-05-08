import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    //TODO: how do i get sender in here? current user?
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      this.resizeTextarea(e);
    }
  }

  resizeTextarea(e) {
    e.currentTarget.style.height = "1px";
    e.currentTarget.style.height = (e.currentTarget.scrollHeight) + "px";
    let container = document.getElementsByClassName('message-form-container')[0];
    container.style.height = (65 + e.currentTarget.scrollHeight) + "px";
  }

  resetTextarea() {
    let textArea = document.getElementsByClassName('message-form-textarea')[0];
    if (textArea.scrollHeight > 45) {
      textArea.style.height = "45px";
      let container = document.getElementsByClassName('message-form-container')[0];
      container.style.height = "100px";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body) {
      let moment = require('moment');
      let date = moment().format('MMMM Do YYYY, h:mm:ss a');
      App.cable.subscriptions.subscriptions[0].speak({
        message: this.state.body,
        sender: this.props.currentUser.username,
        timestamp: date
      });
      this.setState({body: ""});
      this.resetTextarea();
    }
  }

  render() {
    return (
      <div className="message-form-container">
        <div className="message-form-divider">
          <form className="message-form" onSubmit={this.handleSubmit}>
            {/* <input 
              type="textarea" 
              value={this.state.body} 
              onChange={this.update('body')}
              placeholder="Message {channel}"
            /> */}
            <textarea 
              className="message-form-textarea"
              cols="30" 
              rows="1" 
              value={this.state.body}
              onChange={this.update('body')}
              placeholder="Message {channel}"
              >
            </textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default MessageForm;