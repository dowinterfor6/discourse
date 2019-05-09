import React from 'react';

class MemberListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="member-listing-show">
        {this.props.username}
      </li>
    )
  }
}

export default MemberListItem;