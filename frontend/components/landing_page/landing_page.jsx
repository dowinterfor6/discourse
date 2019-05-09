import React from 'react';
import {Link} from 'react-router-dom';

const landingPage = () => (
  <>
    <nav className="nav-bar">
      <ul className="left-nav">
        <li className="discourse-logo-wrapper">
          <img src="https://cdn.discordapp.com/attachments/560127966688837672/576110941339516938/discourse-logo-alt.png" alt="Discourse Logo"></img>
          <div className="discourse-logo-text">
            Discourse
          </div>
        </li>
        {/* <li>Download</li>
        <li>Nitro</li>
        <li>Jobs</li>
        <li>Developers</li>
        <li>Community</li>
        <li>Support</li> */}
      </ul>
      <ul className="right-nav">
        {/* <li><i className="fab fa-twitter fa-lg"></i></li>
        <li><i className="fab fa-facebook-square fa-lg"></i></li>
        <li><i className="fab fa-instagram fa-lg"></i></li> */}
        <li>
          <a href="https://github.com/dowinterfor6">
            <i className="fab fa-github-square fa-2x"></i>  
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andrew-chan-b6ab12168/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li className="login-link-container">
          <Link to='/login' className="login-link">Login</Link>
        </li>
        {/* <li>Language</li> */}
      </ul>
    </nav>

    <section className="main-content">
      <h1>It's time to ditch Scype and Teamspoke.</h1>
      <p>Nothing-in-one voice and text chat for gamers that's free, insecure, and works 
      (mostly). Stop paying for TeamSpoke servers and hassling with Scype. Complicate your 
      life with Discourse.</p>
      <div id="content-buttons">
        <a href="https://github.com/dowinterfor6/discourse">
          <button>Open Discourse on Github</button>
        </a>
        <a href="https://discord.gg">
          <button>Go to Discord homepage</button>
        </a>
      </div>
    </section>

    <section className="background-image-container">

    </section>

    <div className="bottom-content">
      <section className="footer">
        <ul>
          <ul id="foot-header" className="header">
            <img src="https://cdn.discordapp.com/attachments/560127966688837672/576110941339516938/discourse-logo-alt.png" alt="Discourse Small Logo"></img>
          </ul>
          <ul id="foot-header">
            <li id="header">Goal</li>
            <li>Discord clone</li>
          </ul>
          <ul id="foot-header">
            <li id="header">Technologies</li>
            <li>Javascript frontend</li>
            <li>React/Redux libraries</li>
            <li>PostgreSQL database</li>
            <li>Ruby on Rails backend</li>
          </ul>
          <ul id="foot-header">
            <li id="header">Open source assets</li>
            <li>Font Awesome icons</li>
            <li>Discord color palette</li>
            <li>Google Fonts</li>
          </ul>
          {/* <ul id="foot-header">
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
          </ul> */}
        </ul>
      </section>

      <section className="below-footer">
        <div id="left-footer">
          <h2>Ready to try Discourse? It's free!</h2>
          <p>Join over 0.25 players today</p>
        </div>
        <div id="right-footer">
          <Link to='/signup'><button>Sign Up Now</button></Link>
        </div>
      </section>
    </div>
  </>
)

export default landingPage;