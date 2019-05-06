import React from 'react';
import { withRouter } from 'react-router-dom';

class RemoveServerModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveServer = this.handleRemoveServer.bind(this);
  }

  handleRemoveServer(e) {
    if (e.currentTarget.innerHTML.split(" ")[0] === 'Delete') {
      this.props.deleteServer(this.props.currentServer.id)
        .then(
          (res) => {
            this.props.closeModal();
            this.props.history.push('/servers');
          }
        )
    }
  }
  
  render() {
    if (!this.props.currentServer) {
      return null;
    }
    return (
      <div className="remove-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="remove-confirmation-container">
          <h1>ART THOU SURETH TO {this.props.type.toUpperCase()}TH {this.props.currentServer.name}</h1>
          <div className="remove-confirmation-warning">
            Are you sure you want to {this.props.type.toLowerCase()} 
            {this.props.currentServer.name}? This action cannot be undone.
          </div>
          <div className="remove-container-nav">
            <a onClick={() => this.props.closeModal()}>Cancel</a>
            <button onClick={this.handleRemoveServer}>
              {this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)} Server
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(RemoveServerModal);