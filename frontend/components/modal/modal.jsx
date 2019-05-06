import React from 'react';
import ServerModalContainer from './server_modal_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal) {
      case 'server-modal':
        component = <ServerModalContainer />;
        break;
      default:
        return null;
    }

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
    )
  }
}

export default Modal;