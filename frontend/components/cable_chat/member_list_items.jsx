import React from 'react';

class MemberListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  avatarColorRandomizer(id) {
    let colors = {
      0: '#96ec5f',
      1: '#4d963c',
      2: '#1c6028',
      3: '#a51919',
      4: '#ffb321',
      5: '#4f3985',
      6: '#00c5ff'
    }
    return colors[id % (Object.keys(colors).length - 1)];
  }

  render() {
    let backgroundColor = this.avatarColorRandomizer(this.props.id);
    let online = true;
    return(
      <li className="member-listing-show">
        <div className="avatar-background" style={{ background: backgroundColor }}>
          <div className="avatar">
            {online ? 
              <div className="online-status">
              </div>
              :
              null
            }
          </div>
        </div>
        {this.props.username}
      </li>
    )
  }
}

export default MemberListItem;