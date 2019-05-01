import React from 'react';
import {Link} from 'react-router-dom';

class serverIndex extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    console.log(this.props);
    this.props.logout()
      .then(() => this.props.history.push('/login'));
  }

  render() {
    return (
      <div className="discord-main">
        <aside className="discord-nav-bar" scrolling="no">
          <ul>
            <li>Home</li>
            <li></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </aside>
        <div className="discord-main-content-container">
          <section className="title">
            <h2>Some discord name</h2>
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
            <button onClick={this.handleLogout}>Logout</button>
          </section>
          <section className="channel-content">
            This is channels content speaking
          </section>
        </div>
      </div>
    )
  }
}

export default serverIndex;