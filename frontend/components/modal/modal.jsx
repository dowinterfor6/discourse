import React from 'react';
import ServerModal from './server_modal';

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
        component = <ServerModal />;
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