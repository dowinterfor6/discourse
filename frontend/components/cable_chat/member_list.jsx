import React from 'react';
import MemberListItem from './member_list_items';
import {withRouter} from 'react-router-dom';

class MemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    }
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.id)
      .then(
        (data) => {
          this.setState({users: data.server.users});
        }
      )
  }

  render() {
    let users = Object.values(this.state.users);
    return (
      <>
        <p>Users - {users.length}</p>
        <ul className="member-listing-index">
          {users.map((user, idx) => (
            <MemberListItem key={idx} username={user.username}/>
          ))}
        </ul>
      </>
    )
  }
}

export default withRouter(MemberList);