import React from 'react';
import ModalContainer from '../modal/modal_container';

class AddServerIcon extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal(e) {
    let listElement = document.getElementsByClassName('nav-in-focus')[0];
    if (listElement) {
      listElement.classList.remove('nav-in-focus');
    }
    this.props.openModal('server-modal');
    e.currentTarget.classList.add('nav-in-focus');
  }

  render() {
    return (
      <>
        <div className="add-server-icon" onClick={this.handleOpenModal}>+</div>
        <ModalContainer />
      </>
    )
  }
}

export default AddServerIcon;