import React from 'react';

class ServerModal extends React.Component {

  render() {
    return (
      <div className="modal-form-index">
        <h1>Oh, another server huh?</h1>
        <div className="modal-form-container">
          <div className="modal-link-container create">
            <h2>Create</h2>
            <h6>Create a new server and invite your friends, it's free!</h6>
            <img src="" alt="placeholder"/>
            <button>Create a server</button>
          </div>
          <label>or</label>
          <div className="modal-link-container join">
            <h2>Join</h2>
            <h6>Enter an instant invite and join your friend's server</h6>
            <img src="" alt="placeholder" />
            <button>Join a server</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerModal