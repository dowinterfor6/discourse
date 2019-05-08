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
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body) {
      // let date = new Date;
      // let date = Date.now().toDateString().split(" ");
      // date = (date.slice(0, 3) + date.slice(4)).join(" ");
      let moment = require('moment');
      let date = moment().format('MMMM Do YYYY, h:mm:ss a');
      App.cable.subscriptions.subscriptions[0].speak({
        message: this.state.body,
        sender: this.props.currentUser.username,
        timestamp: date
      });
      this.setState({body: ""});
    }
  }

  render() {
    return (
      <div className="message-form-container">
        <div className="message-form-divider">
          <form className="message-form" onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              value={this.state.body} 
              onChange={this.update('body')}
              placeholder="Message {channel}"
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default MessageForm;