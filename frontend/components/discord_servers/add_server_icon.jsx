import React from 'react';
import ModalContainer from '../modal/modal_container';

class AddServerIcon extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal(e) {
    this.props.openModal('server-modal');
  }

  render() {
    return (
      <>
        <div className="add-server-icon" onClick={this.handleOpenModal}>+</div>
        <ModalContainer/>
      </>
    )
  }
}

export default AddServerIcon;