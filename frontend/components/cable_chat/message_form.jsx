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
    App.cable.subscriptions.subscriptions[0].speak({
      message: this.state.body,
      sender: this.props.currentUser.username
    });
    this.setState({body: ""});
  }

  render() {
    return (
      <div className="message-form-container">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.body} 
            onChange={this.update('body')}
            placeholder="Type message here"
          />
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default MessageForm;