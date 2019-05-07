import React from 'react';
import { Link } from 'react-router-dom';
import UserInfoBar from './user_info_bar';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentServer: {},
      servers: {},
      dropdownState: false
    };
    this.updateStateWithFetch = this.updateStateWithFetch.bind(this);
    this.handleDropdownIconClick = this.handleDropdownIconClick.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  updateStateWithFetch() {
    return (
      this.props.fetchAllServers()
        .then(
          (res) => this.setState({ servers: res.servers })
        ).then(
          () => this.setState({ currentServer: this.state.servers[this.props.match.params.id] })
        )
    );
  }

  componentDidMount() {
    this.updateStateWithFetch()
      .then(
        () => {
          //TODO: this is actually dumbaf please fix this asap
          //I dont know when another component has mounted
          //use global state?
          window.setTimeout(() => {
            if (!document.getElementsByClassName('nav-in-focus')[0]) {
              let elementPreload;
              elementPreload = document.getElementsByClassName(`${this.props.match.params.id}`)[0];
              elementPreload.classList.add('nav-in-focus');
            }
          }, 200);
        }
      )
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      let prevElement = document.getElementsByClassName(prevProps.match.params.id)[0];
      prevElement.classList.remove('nav-in-focus');
      let elementPreload = document.getElementsByClassName(this.props.match.params.id)[0];
      elementPreload.classList.add('nav-in-focus');
      let dropdownComponent = document.getElementsByClassName('channel-title-dropdown')[0];
      dropdownComponent.classList.add('hidden');
      this.setState({dropdownState: false});
      this.updateStateWithFetch();
    }
  }

  handleDropdownIconClick(e) {
    let dropdownNextState = !this.state.dropdownState;
    let dropdownComponent = document.getElementsByClassName('channel-title-dropdown')[0];
    if (!this.state.dropdownState) {
      dropdownComponent.classList.remove('hidden');
      dropdownComponent.classList.add('slideInDown');
      window.setTimeout(() => {
        dropdownComponent.classList.remove('slideInDown');
      }, 200);
    } else {
      dropdownComponent.classList.add('hidden');
    }
    this.setState({dropdownState: dropdownNextState});
  }

  handleOpenModal(e) {
    //TODO: match params works here
    let dropdownComponent = document.getElementsByClassName('channel-title-dropdown')[0];
    dropdownComponent.classList.add('hidden');
    this.setState({ dropdownState: false });
    let modalIdentifier;
    if (e.currentTarget.innerHTML.includes('Invite')) {
      modalIdentifier = 'invite-link-display';
    } else if (e.currentTarget.innerHTML.includes('Delete')){
      modalIdentifier = 'delete-server-modal';
    } else {
      modalIdentifier = 'leave-server-modal';
    }
    this.props.openModal(modalIdentifier, this.props.match.params.id); //payload
  }

  render() {
    let serverName;
    let currentUserId;
    let currentServerOwnerId;
    if (this.state.currentServer) {
      serverName = this.state.currentServer.name;
      document.title = serverName; //TODO: CHANGE TO CHANNEL NAME LATER
      currentUserId = this.props.currentUser.id;
      currentServerOwnerId = this.state.currentServer.owner_id;
    }

    return (
      <div className="discord-main-content-container">
        <section className="title">
          <div className="channel-title-container">
            <h2>{serverName}</h2>
            <div onClick={this.handleDropdownIconClick} className="dropdown-icon">
              {this.state.dropdownState ? 
                <i className="fas fa-chevron-up fa-2x"></i>
                :
                <i className="fas fa-chevron-down fa-2x"></i>
              }
            </div>
            <div className="dropdown-container">
              <ul className="channel-title-dropdown hidden">
                <li onClick={this.handleOpenModal}>
                  <i className="fas fa-plus"></i>
                  Invite your friends!
                </li>
                <li onClick={this.handleOpenModal}>
                {currentUserId === currentServerOwnerId ? 
                    <>
                      <i className="far fa-trash-alt"></i>
                      Delete server
                    </>
                    : 
                    <>
                      <i className="fas fa-door-open"></i>
                      Leave server
                    </>
                }
                </li> 
              </ul>
            </div>
          </div>
        </section>

        <section className="description">
          <div className="left-description">
            <i className="fas fa-hashtag fa-2x"></i>
            <h2>IS-A-MUCH-GOOD-SUCH-WOW-DISCORD</h2>
          </div>
          <div className="right-description">
            {/* <i className="fas fa-bell fa-2x"></i>
            <i className="fas fa-thumbtack fa-2x"></i>
            <i className="fas fa-users fa-2x"></i> */}
            <input type="text" placeholder="search"></input>
            <i className="fas fa-search fa-2x"></i>
            {/* <i className="fas fa-at fa-2x"></i> */}
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