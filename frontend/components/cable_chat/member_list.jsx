import React from 'react';
import MemberListItem from './member_list_items';
import {withRouter} from 'react-router-dom';

class MemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    }
    this.refetchServerMembers = this.refetchServerMembers.bind(this);
  }

  refetchServerMembers() {
    this.props.fetchServer(this.props.match.params.id)
      .then(
        (data) => {
          this.setState({ users: data.server.users });
        }
      )
  }

  componentDidMount() {
    this.refetchServerMembers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.refetchServerMembers();
    }
  }

  render() {
    let users = Object.values(this.state.users);
    return (
      <>
        <p>Users - {users.length}</p>
        <ul className="member-listing-index">
          {users.map((user, idx) => (
            <MemberListItem key={idx} username={user.username} id={user.id}/>
          ))}
        </ul>
      </>
    )
  }
}

export default withRouter(MemberList);