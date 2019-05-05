import React from 'react';
import {withRouter} from 'react-router-dom';

class ServerListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleServerNavigation = this.handleServerNavigation.bind(this);
  }

  // TODO: Change document.title to channel name later
  // TODO: User componentDidUpdate to account for url navigation
  // TODO: Match params id doesn't work because this is associated with /servers
  // and not /servers/:id, need to use channelindex to check.
  handleServerNavigation(e) {
    this.props.history.push(`/servers/${this.props.server.id}`);
  }
  
  render() {  
  return (
    <li onClick={this.handleServerNavigation}>
      {this.props.server.name[0]}
    </li>
  )}
}

export default withRouter(ServerListItem);