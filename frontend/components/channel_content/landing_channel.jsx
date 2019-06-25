import React from 'react';
import { Link } from 'react-router-dom';
import UserInfoBar from './user_info_bar';
import ActivityDisplay from './activity_display';
import MemberListItem from '../cable_chat/member_list_items';

class LandingChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: {}
    };
  }

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
    this.props.fetchUsers().then(
      (data) => this.setState({ userList: data.users })
    );
  }

  render() {
    let currentUser = this.props.currentUser;
    let userDisplay;
    if (this.state.userList) {
      userDisplay = Object.values(this.state.userList).map(
        (user, idx) => (
          <MemberListItem key={idx} username={user.username} id={user.id} />
        )
      )
    }

    return (
      <div className="discord-main-content-container activity-channel-content-container">

        <section className="title">
          {/* <form className="search-container">
            <input 
              readOnly
              type="text" 
              placeholder="Find or start a conversation"
            />
          </form> */}
          <i className="fas fa-user-friends fa-2x"></i>
          <h3>Users</h3>
        </section>

        <section className="description">
          <div className="left-description">
            <i className="fas fa-gamepad fa-2x"></i>
            <h3>Activity</h3>
          </div>
          <div className="right-description">
            {/* <i className="fas fa-at fa-2x"></i> */}
            {/* <i className="far fa-question-circle fa-2x"></i> */}
          </div>
        </section>

        <section className="channels">
          <section className="channels-top-info" scrolling="no">
            <ul className="header-list">
              {/* <li className="selected"><i className="fas fa-gamepad fa-2x"></i></li>
              <li className="selected">Activity</li>
              <li><i className="fas fa-shopping-bag fa-2x"></i></li>
              <li>Library</li>
              <li><i className="fab fa-gripfire fa-2x"></i></li>
              <li>Nitro</li>
              */}
            </ul>
            <section className="message-container">
              <ul className="direct-message-list member-listing-index">
                {userDisplay}
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