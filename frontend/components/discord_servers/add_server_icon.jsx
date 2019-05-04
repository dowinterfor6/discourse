import React from 'react';

class AddServerIcon extends React.Component {

  render() {
    return (
      <div className="add-server-icon" onClick={()=> console.log(this.props)}>+</div>
    )
  }
}

export default AddServerIcon;