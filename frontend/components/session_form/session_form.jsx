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
      .then(() => {
        if (this.props.match.path.url === '/servers') {
          return this.props.history.push('/servers');
        }
      });
  }

  componentWillUnmount() {
    this.props.deleteErrors();
  }

  componentDidUpdate() {
    this.renderErrors();
  }

  componentDidMount() {
    document.title = 'Discourse - A Discord clone';
  }

  update(field) {
    return (e) => (this.setState({[field]: e.currentTarget.value}));
  }

  handleDemoLogin() {
    const demoUser = {
      username: 'demo_user',
      password: 'password'
    };
    this.props.demoLogin(demoUser)
      .then(() => {
        if (this.props.match.path.url === '/servers') {
          return this.props.history.push('/servers');
        }
      });
  }
  
  renderErrors() {
    if (this.props.errors.length > 0) {
      let errorsParse;
      const form = document.querySelector('form');
      if (!form.className.includes('error-form')) {
        form.className += ' error-form';
      }
      errorsParse = this.parseErrors();
      Object.keys(errorsParse).forEach((key) => {
        if (errorsParse[key].length > 0) {
          let textContainer = document.createElement('h5');
          let errorText = `- ${errorsParse[key]}`;
          if (key === 'login') {
            key = 'username';
          }
          textContainer.appendChild(document.createTextNode(errorText));
          let labelContainer = document.getElementById(`${key}-label`);
          if (labelContainer.childNodes && labelContainer.childNodes.length > 1) {
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
      password: '',
      login: ''
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
      } else {
        errorObj.login = errDisp;
      }
    });

    return errorObj;
  }

  render() {
    // TODO: asdjlkj
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
              Email &nbsp;
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
          <Link to='/' className="login-logo">
            <div className="discourse-logo-wrapper">
              <img src="https://cdn.discordapp.com/attachments/560127966688837672/576110941339516938/discourse-logo-alt.png" alt="Discourse Logo"></img>
              <div className="discourse-logo-text">
                Discourse
              </div>
            </div>
          </Link>
          <form className="login-form bounceInDown" onSubmit={this.handleSubmit}>
            {formHeader}
            {emailForm}
            <label>
              <div id="username-label">
                Username &nbsp;
              </div>
              <input  
                required type="text" 
                onChange={this.update('username')}>
              </input>
            </label>
            <label>
              <div id="password-label">
                Password &nbsp;
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