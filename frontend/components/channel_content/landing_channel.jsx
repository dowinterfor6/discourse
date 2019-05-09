import React from 'react';
import { Link } from 'react-router-dom';
import UserInfoBar from './user_info_bar';
import ActivityDisplay from './activity_display';

class LandingChannel extends React.Component {

  updateDocumentTitle() {
    if (document.title !== 'Activity') {
      document.title = 'Activity';
    }
  }

  componentDidUpdate() {
    this.updateDocumentTitle();
  }

  componentDidMount() {
    this.updateDocumentTitle();
  }

  render() {
    let currentUser = this.props.currentUser;

    return (
      <div className="discord-main-content-container activity-channel-content-container">

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
          </div>
        </section>

        <section className="channels">
          <section className="channels-top-info" scrolling="no">
            <ul className="header-list">
              <li><i className="fas fa-gamepad fa-2x"></i></li>
              <li>&nbsp; Activity</li>
              <li><i className="fas fa-shopping-bag fa-2x"></i></li>
              <li>&nbsp; Library</li>
              <li><i className="fab fa-gripfire fa-2x"></i></li>
              <li>&nbsp; Nitro</li>
              <li><i className="fas fa-user-friends fa-2x"></i></li>
              <li>&nbsp; Friends</li>
            </ul>
            <section className="message-container">
              <p>Direct Messages</p>
              <ul className="message-list">
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
                <li>Some user</li>
              </ul>
            </section>
          </section>
          <UserInfoBar currentUser={this.props.currentUser} logout={this.props.logout}/>
        </section>

        <ActivityDisplay />
      </div>
    )
  }
}

export default LandingChannel;