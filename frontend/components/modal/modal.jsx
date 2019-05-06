import React from 'react';
import ServerModalContainer from './server_modal_container';
import InviteLinkModalContainer from './invite_link_modal_container';
import {withRouter} from 'react-router-dom';
import RemoveServerModalContainer from './remove_server_modal_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal.modal) {
      case 'server-modal':
        component = <ServerModalContainer />;
        break;
      case 'invite-link-display':
        // TODO: do i need to check if it exists?
        if (this.props.modal.id) {
          let server = this.props.servers[this.props.modal.id];
          component = <InviteLinkModalContainer currentServer={server}/>;
          break;
        } else {
          break;
        }
      case 'delete-server-modal':
        if (this.props.modal.id) {
          let server = this.props.servers[this.props.modal.id];
          component = <RemoveServerModalContainer currentServer={server} type='delete'/>;
          break;
        } else {
          break;
        }
      case 'leave-server-modal':
      //TODO: UserServer modal stuff
        if (this.props.modal.id) {
          let server = this.props.servers[this.props.modal.id];
          component = <RemoveServerModalContainer currentServer={server} type='leave' />;
          break;
        } else {
          break;
        }
      default:
        return null;
    }

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
          {component}
      </div>
    )
  }
}

export default withRouter(Modal);