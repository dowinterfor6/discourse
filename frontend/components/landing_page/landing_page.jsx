import React from 'react';
import {Link} from 'react-router-dom';

const landingPage = () => (
  <>
    <nav className="nav-bar">
      <ul className="left-nav">
        <li><img src={window.discordLogoURL} alt="Discord Logo"></img></li>
        <li>Download</li>
        <li>Nitro</li>
        <li>Jobs</li>
        <li>Developers</li>
        <li>Community</li>
        <li>Support</li>
      </ul>
      <ul className="right-nav">
        <li><i className="fab fa-twitter fa-lg"></i></li>
        <li><i className="fab fa-facebook-square fa-lg"></i></li>
        <li><i className="fab fa-instagram fa-lg"></i></li>
        <li><Link to='/login' className="login-link">Login</Link></li>
        <li>Language</li>
      </ul>
    </nav>

    <section className="main-content">
      <h1>It's time to ditch Skype and Teamspeak.</h1>
      <p>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for
      TeamSpeak servers and hassling with Skype. Simplify your life.</p>
      <div id="content-buttons">
        <button>Download for Linux</button>
        <button>Open Discord in your Browser</button>
      </div>
    </section>

    <section className="background-image-container">

    </section>

    <div className="bottom-content">
      <section className="footer">
        <ul>
          <ul id="foot-header" className="header">
            <img src={window.discordSmallLogoURL} alt="Discord Small Logo"></img>
          </ul>
          <ul id="foot-header">
            <li id="header">Product</li>
            <li>Download</li>
            <li>Branding</li>
            <li>Nitro</li>
          </ul>
          <ul id="foot-header">
            <li id="header">Developers</li>
            <li>Sell Your Game</li>
            <li>Rich Presence</li>
            <li>Verification</li>
            <li>Applications</li>
            <li>Documentation</li>
          </ul>
          <ul id="foot-header">
            <li id="header">Resources</li>
            <li>Help & Support</li>
            <li>Guidelines</li>
            <li>Feedback</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Status</li>
          </ul>
          <ul id="foot-header">
            <li id="header">Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
          </ul>
          <ul id="foot-header">
            <li id="header">More</li>
            <li>Partners</li>
            <li>HypeSquad</li>
            <li>Merch Store</li>
            <li>Press Inquiries</li>
            <li>Open Source</li>
          </ul>
        </ul>
      </section>

      <section className="below-footer">
        <div id="left-footer">
          <h2>Ready to try Discord? It's free!</h2>
          <p>Join over 250 million players today</p>
        </div>
        <div id="right-footer">
          <Link to='/signup'><button>Sign Up Now</button></Link>
        </div>
      </section>
    </div>
  </>
)

export default landingPage;