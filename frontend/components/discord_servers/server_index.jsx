import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LandingChannelContainer from '../channel_content/landing_channel_container';
import ChannelIndexContainer from '../channel_content/channel_index_container';
import {withRouter} from 'react-router-dom';

class serverIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleServerNavigation = this.handleServerNavigation.bind(this);
  }

  handleServerNavigation(e) {
    // TODO: Use this differently later
    // TODO: Write if ciheck for active selection later
    let serverId = e.currentTarget.innerHTML;
    // console.log(this.props);
    // console.log(this.state);
    // if (this.props.match.params.id != serverId) {
      this.props.history.push(`/servers/${serverId}`);
    // }
  }

  render() {
    return (
      <div className="discord-main">
        <aside className="discord-nav-bar" scrolling="no">
          <Link to="/servers"><div className="home-icon">Home</div></Link>
          {/* TODO: Temporary testing */}
          <ul>
            <li onClick={this.handleServerNavigation}>1</li>
            <li onClick={this.handleServerNavigation}>2</li>
            <li onClick={this.handleServerNavigation}>3</li>
            <li onClick={this.handleServerNavigation}>4</li>
            <li onClick={this.handleServerNavigation}>5</li>
            <li onClick={this.handleServerNavigation}>6</li>
            <li onClick={this.handleServerNavigation}>7</li>
            <li onClick={this.handleServerNavigation}>8</li>
            <li onClick={this.handleServerNavigation}>9</li>
            <li onClick={this.handleServerNavigation}>10</li>
            <li onClick={this.handleServerNavigation}>11</li>
            <li onClick={this.handleServerNavigation}>12</li>
            <li onClick={this.handleServerNavigation}>13</li>
            <li onClick={this.handleServerNavigation}>14</li>
            <li onClick={this.handleServerNavigation}>15</li>
            <li onClick={this.handleServerNavigation}>16</li>
            <li onClick={this.handleServerNavigation}>17</li>
            <li onClick={this.handleServerNavigation}>18</li>
            <li onClick={this.handleServerNavigation}>19</li>
          </ul>
          <div className="add-server-icon">+</div>
        </aside>
        {/* <LandingChannelContainer /> */}
        <Switch>
          <ProtectedRoute exact path="/servers" component={LandingChannelContainer}></ProtectedRoute>
          <ProtectedRoute path="/servers/:id" component={ChannelIndexContainer}></ProtectedRoute>
        </Switch>
      </div>
    )
  }
}

export default withRouter(serverIndex);