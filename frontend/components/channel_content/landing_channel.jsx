import React from 'react';
import { Link } from 'react-router-dom';

class LandingChannel extends React.Component {

  render() {
    let currentUser = this.props;
    console.log(currentUser);

    return (
      <div className="discord-main-content-container">
        <section className="title">
          <form className="search-container">
            <input type="text" placeholder="Find or start a conversation"/>
          </form>
        </section>
        <section className="description">
          <div className="left-description">
            <i className="fas fa-gamepad fa-2x"></i>
            <h3>Activity</h3>
          </div>
          <div className="right-description">
            <i className="fas fa-at fa-2x"></i>
            <i className="far fa-question-circle fa-2x"></i>
            <label onClick={this.props.logout}>
              <span>Logout:</span>
              <i className="fas fa-sign-out-alt fa-2x"></i>
            </label>
          </div>
        </section>
        <section className="channels">
          <ul className="header-list">
            <li><i className="fas fa-gamepad fa-2x"></i>&nbsp; Activity</li>
            <li><i className="fas fa-shopping-bag fa-2x"></i>&nbsp; Library</li>
            <li><i className="fab fa-gripfire fa-2x"></i>&nbsp; Nitro</li>
            <li><i className="fas fa-user-friends fa-2x"></i>&nbsp; Friends</li>
          </ul>
          <section className="message-container">
            <p>Direct Messages</p>
            <ul className="message-list">
              <li>Some user</li>
            </ul>
          </section>
          <section className="user-info">
            <div>
              <h3></h3>
            </div>
          </section>
        </section>
        <section className="channel-content">
          This is channels content speaking
        </section>
      </div>
    )
  }
}

export default LandingChannel;