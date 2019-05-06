import React from 'react';
import {withRouter} from 'react-router-dom';

class InviteLinkDisplayModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCopy(e) {
    let text = document.getElementsByClassName('invite-text')[0];
    text.select();
    document.execCommand("copy");
  }
 
  render() {
    return (
      <div className="modal-child-invite" onClick={(e) => e.stopPropagation()}>
        <div className="invite-modal-container">
          <h1>Invite friends to {this.props.currentServer.name}</h1>
          <h2>Send a server invite link to a friend</h2>
          <div className="invite-link-container">
            <input 
              readOnly 
              type="text" 
              value={this.props.currentServer.invite_link}
              className="invite-text"
              onClick={(e) => e.preventDefault()}
            />
            <button onClick={this.handleCopy}>Copy</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(InviteLinkDisplayModal);