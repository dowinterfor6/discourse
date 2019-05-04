import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LandingChannelContainer from '../channel_content/landing_channel_container';
import ChannelIndexContainer from '../channel_content/channel_index_container';
import {withRouter} from 'react-router-dom';
import ServerListItem from './server_list_item';

class serverIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: {}
    }
    this.handleServerNavigation = this.handleServerNavigation.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllServers().then(
      () => this.setState({
        servers: this.props.servers
      })
    )
  }

  //TODO: Temporary solution until i do channels and new "auth" routes
  //TODO: THIS DOESN"T WORK LMAO
  componentDidUpdate() {

  }

  render() {
    let serverIds = Object.keys(this.state.servers);
    return (
      <div className="discord-main">
        <aside className="discord-nav-bar" scrolling="no">
          <Link to="/servers"><div className="home-icon"><i className="fas fa-home fa-2x"></i></div></Link>
          <div className="home-icon-divider"></div>
          <ul>
            {serverIds.map((id) => (
              <ServerListItem key={id} server={this.state.servers[id]}/>
            ))}
          </ul>
          <div className="add-server-icon">+</div>
        </aside>
        <Switch>
          <ProtectedRoute exact path="/servers" component={LandingChannelContainer}></ProtectedRoute>
          <ProtectedRoute path="/servers/:id" component={ChannelIndexContainer}></ProtectedRoute>
        </Switch>
      </div>
    )
  }
}

export default withRouter(serverIndex);