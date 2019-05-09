import React from 'react';

class MemberListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  avatarColorRandomizer(id) {
    let colors = {
      1: '#96ec5f',
      2: '#4d963c',
      3: '#1c6028',
      4: '#a51919',
      5: '#ffb321',
      6: '#4f3985',
      7: '#00c5ff'
    }
    return colors[id % Object.keys(colors).length];
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