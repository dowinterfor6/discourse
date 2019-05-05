import React from 'react';

class ServerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 'initial' };
    this.handleBack = this.handleBack.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    this.index = this.index.bind(this);
  }

  nodeGetter(className, animationName) {
    let serverModalNode = document.getElementsByClassName(className)[0];
    serverModalNode.classList.add(animationName);
    window.setTimeout(() => {
      serverModalNode.classList.remove(animationName);
    }, 200);
  }

  componentDidMount() {

    this.nodeGetter('modal-form-index', 'zoomIn');
  }

  handleBack(e) {
    this.nodeGetter(`modal-form-${this.state.active}`, 'slideOutRight');
    this.setState({ active: 'index' });
  }

  handleNavigation(e) {
    let nextModal = e.currentTarget.innerText.split(" ")[0].toLowerCase();
    // this.nodeGetter(`modal-form-${nextModal}`, 'slideInRight');
    // this.nodeGetter('modal-form-index', 'slideOutLeft');
    this.setState({active: nextModal});
  }

  index() {
    let initialTest = this.state.active;
    let landingClass = "modal-form-landing" + (initialTest === 'initial' ? '' : ' slideInLeft');
    return (
      <div className={landingClass}>
        <h1>Oh, another server huh?</h1>
        <div className="modal-form-container">
          <div className="modal-link-container create">
            <h2>Create</h2>
            <h6>Create a new server and invite your friends, it's free!</h6>
            <img src="" alt="placeholder" />
            <button onClick={this.handleNavigation}>Create a server</button>
          </div>
          <label>or</label>
          <div className="modal-link-container join">
            <h2>Join</h2>
            <h6>Enter an instant invite and join your friend's server</h6>
            <img src="" alt="placeholder" />
            <button onClick={this.handleNavigation}>Join a server</button>
          </div>
        </div>
      </div>
    )
  }

  create() {
    return (
      <div className="modal-form-create slideInRight">
        <h1>Create your server</h1>
        <p>By creating a server, you will have access to free voice and text
          (coming soon, not guaranteed) chat to use amongst your friends.
        </p>
        <div className="modal-form-input">
          <label>
            Server Name
          </label>
          <input type="text" placeholder="Enter a server name" />
        </div>
        <div className="modal-form-nav">
          <div className="back-nav" onClick={this.handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </div>
          <button>Create</button>
        </div>
      </div>
    )
  }

  join() {
    return (
      <div className="modal-form-join slideInRight">
        <h1>Join a server</h1>
        <p>Enter an instant invite below to join an existing server. The invite
          will look something like these:
        </p>
        {/* TODO: ADD BETTER SAMPLE */}
        <h6>discourse_invite/afJeaE3C</h6>
        <div className="modal-form-input">
          <input type="text" placeholder="Enter an instant invite" />
        </div>
        <div className="modal-form-nav">
          <div className="back-nav" onClick={this.handleBack}>
            <i className="fas fa-arrow-left"></i> 
            Back
          </div>
          <button>Join</button>
        </div>
      </div>
    )
  }

  render() {
    let component;
    switch (this.state.active) {
      case ('create'):
        component = this.create();
        break;
      case ('join'):
        component = this.join();
        break;
      default:
        component = this.index();
        break;
    }
    return (
      <div className="modal-form-index">
        {component}
      </div>
    )
  }
}

export default ServerModal