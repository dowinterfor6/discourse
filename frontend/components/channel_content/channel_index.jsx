import React from 'react';
import { Link } from 'react-router-dom';
import UserInfoBar from './user_info_bar';

class ChannelIndex extends React.Component {
  render() {
    return (
      <div className="discord-main-content-container">
        <section className="title">
          <h2>Some discord name, {this.props.match.params.id}</h2>
        </section>

        <section className="description">
          <div className="left-description">
            <i className="fas fa-hashtag fa-2x"></i>
            <h2>IS-A-MUCH-GOOD-SUCH-WOW-DISCORD</h2>
          </div>
          <div className="right-description">
            <i className="fas fa-bell fa-2x"></i>
            <i className="fas fa-thumbtack fa-2x"></i>
            <i className="fas fa-users fa-2x"></i>
            <input type="text" placeholder="search"></input>
            <i className="fas fa-search fa-2x"></i>
            <i className="fas fa-at fa-2x"></i>
            <i className="far fa-question-circle fa-2x"></i>
          </div>
        </section>

        <section className="channels">
          {/* TODO: refactor and add channel_list_item component */}
          <ul>
            <li><i className="fas fa-hashtag"></i> assembly-general</li>
            <li><i className="fas fa-hashtag"></i> generally-not-eso</li>
            <li><i className="fas fa-hashtag"></i> general-memes</li>
            <li><i className="fas fa-hashtag"></i> generally-parses</li>
            <li><i className="fas fa-hashtag"></i> backup-general</li>
            <li><i className="fas fa-hashtag"></i> generally-dead</li>
            <li><i className="fas fa-hashtag"></i> bdo-general</li>
            <li><i className="fas fa-hashtag"></i> dump-general</li>
            <li><i className="fas fa-hashtag"></i> rhytm-general</li>
          </ul>
          <UserInfoBar currentUser={this.props.currentUser} logout={this.props.logout} />
        </section>
        
        <section className="channel-content">
          {/* TODO: do dis */}
          This is channels content speaking
        </section>
      </div>
    )
  }
}

export default ChannelIndex;