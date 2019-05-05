import React from 'react';
import {withRouter} from 'react-router-dom';

class ServerListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleServerNavigation = this.handleServerNavigation.bind(this);
    this.displayDocumentTitle = this.displayDocumentTitle.bind(this);
  }

  displayDocumentTitle() {
    let displayName = this.props.server.name;
    displayName = displayName.split("").map((el) => el === ' ' ? '-' : el).join("").toLowerCase();
    document.title = `#${displayName}`
  }

  componentDidMount() {
    this.displayDocumentTitle();
  }

  // TODO: Change to channel name later
  // TODO: User componentDidUpdate to account for url navigation
  // TODO: Match params id doesn't work because this is associated with /servers
  // and not /servers/:id, need to use channelindex to check.
  handleServerNavigation(e) {
    this.props.history.push(`/servers/${this.props.server.id}`);
    this.displayDocumentTitle();
  }
  
  render() {  
  return (
    <li onClick={this.handleServerNavigation}>
      {this.props.server.name[0]}
    </li>
  )}
}

export default withRouter(ServerListItem);