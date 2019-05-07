import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LandingChannelContainer from '../channel_content/landing_channel_container';
import ChannelIndexContainer from '../channel_content/channel_index_container';
import {withRouter} from 'react-router-dom';
import ServerListItem from './server_list_item';
import AddServerContainer from './add_server_container';

class serverIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: {}
    }
    this.handleActivityNav = this.handleActivityNav.bind(this);
  }

  //TODO: Sort server list by time UserServer was added?
  componentDidMount() {
    this.props.fetchAllServers().then(
      () => {
        this.setState({
          servers: this.props.servers
        });
      }
    ).then(
      () => {
        if (this.props.location.pathname === "/servers") {
          let elementPreload;
          elementPreload = document.getElementsByClassName('home-icon')[0];
          elementPreload.classList.add('nav-in-focus');
        }
      }
    )
  }

  //TODO: THIS WORKS LMAO, how do I compare array equality?
  componentDidUpdate(prevProps) {
    if (Object.keys(prevProps.servers).length !== Object.keys(this.state.servers).length) {
      this.setState({
        servers: this.props.servers
      });
    }
  }

  handleActivityNav(e) {
    let listElement = document.getElementsByClassName('nav-in-focus')[0];
    if (listElement) {
      listElement.classList.remove('nav-in-focus');
    }
    e.currentTarget.classList.add('nav-in-focus');
    this.props.history.push('/servers');
  }

  render() {
    let serverIds = Object.keys(this.state.servers);
    return (
      <div className="discord-main">
        <aside className="discord-nav-bar" scrolling="no">
          {/* <Link to="/servers"> */}
            <div className="home-icon" onClick={this.handleActivityNav}>
              <i className="fas fa-home fa-2x"></i>
            </div>
          {/* </Link> */}
          <div className="home-icon-divider"></div>
          <ul>
            {serverIds.map((id) => (
              <ServerListItem key={id} server={this.state.servers[id]}/>
            ))}
          </ul>

          <AddServerContainer />
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