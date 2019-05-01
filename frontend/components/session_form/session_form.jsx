import React from 'react';
import merge from 'lodash/merge';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.parseErrors = this.parseErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user)
    .then(() => this.props.history.push('/servers'));
  }

  componentWillUnmount() {
    this.props.deleteErrors();
  }

  componentDidUpdate() {
    this.renderErrors();
  }

  update(field) {
    return (e) => (this.setState({[field]: e.currentTarget.value}));
  }

  handleDemoLogin() {
    const demoUser = {
      username: 'username',
      password: 'password'
    };
    this.props.demoLogin(demoUser)
      .then(() => this.props.history.push('/servers'));
  }
  
  renderErrors() {
    let errorsParse;
    if (this.props.errors.length > 0) {
      const form = document.querySelector('form');
      if (!form.className.includes('error-form')) {
        form.className += ' error-form';
      }
      errorsParse = this.parseErrors();
      Object.keys(errorsParse).forEach((key) => {
        let textContainer = document.createElement('h5');
        let errorText = "";
        if (errorsParse[key].length > 0) {
          errorText = ` - ${errorsParse[key]}`;
          textContainer.appendChild(document.createTextNode(errorText));
          let labelContainer = document.getElementById(`${key}-label`);
          console.log(labelContainer.childNodes.length);
          if (labelContainer.childNodes.length > 1) {
            labelContainer.replaceChild(textContainer, labelContainer.childNodes[1])
          } else {
            labelContainer.appendChild(textContainer);
          }
        }
      })
    }
  }

  parseErrors() {
    let errorObj = {
      email: '',
      username: '',
      password: ''
    };

    this.props.errors.forEach((err) => {
      let errDisp = err;
      err = err.toLowerCase();
      if (err.includes('email')) {
        errorObj.email = errDisp;
      } else if (err.includes('username')) {
        errorObj.username = errDisp;
      } else if (err.includes('password')) {
        errorObj.password = errDisp;
      }
    });

    return errorObj;
  }

  render() {
    // Probably needs refactoring somehow
    // Maybe put in props?
    let otherFormLink;
    let formHeader;
    let emailForm;
    let forgotPassword;
    switch (this.props.formType) {
      case 'login':
        otherFormLink = 
          <div className='other-form-container'>
          <p>Need an account? &nbsp;</p>
            <Link to='/signup'><h4>Register</h4></Link>
            <p>&nbsp; or &nbsp;</p>
            <h4 onClick={this.handleDemoLogin}>Demo Login</h4>
          </div>;
        formHeader = 
          <>
            <h2>Welcome back!</h2>
            <h3>We're so excited to see you again!</h3>
          </>;
        forgotPassword = 
          <p>
            <a>Forgot your password? (too bad)</a>
          </p>;
        break;
      case 'signup':
        otherFormLink = 'login';
        formHeader = 
          <h2>Create an account</h2>;
        emailForm = 
          <label>
            <div id="email-label">
              Email
            </div>
            <input 
              required 
              type="email" 
              onChange={this.update('email')}>
            </input>
          </label>;
        otherFormLink =
          <div className='other-form-container'>
            <p>Already have an account? &nbsp;</p>
            <Link to='/login'><h4>Login</h4></Link>
            <p>&nbsp; or &nbsp;</p>
            <h4 onClick={this.handleDemoLogin}>Demo Login</h4>
          </div>;
        break;
      default:
        formHeader = 
          <h2>
            How did you end up here?!
          </h2>;
        otherFormLink =
          <div className='other-form-container'>
            <p>Get me out! &nbsp;</p>
            <Link to='/'><h4>*Flies away*</h4></Link>
          </div>;
        // How do you even get here lol
        break;
    }

    return (
      <div className="login-body">
        <div className="login-main">
          <Link to='/'><img src="./assets/discord-logo.png" alt="Discord Logo"></img></Link>
          <form className="login-form" onSubmit={this.handleSubmit}>
            {formHeader}
            {emailForm}
            <label>
              <div id="username-label">
                Username 
              </div>
              <input  
                required type="text" 
                onChange={this.update('username')}>
              </input>
            </label>
            <label>
              <div id="password-label">
                Password
              </div>
              <input 
                required 
                type="password" 
                onChange={this.update('password')}>
              </input>
            </label>
            {forgotPassword}
            <button>{this.props.formType}</button>
            {otherFormLink}
          </form>
        </div>
      </div>
    )

  }
}

export default SessionForm;