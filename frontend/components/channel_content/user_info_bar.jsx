import React from 'react'

const UserInfoBar = ({currentUser, logout}) => (
  <section className="user-info-bar">
    <h5>Welcome: {currentUser.username}</h5>
    <div className="nav-icon-container">
      <i className="fas fa-cog fa-2x"></i> 
      <label onClick={logout}>
        <i className="fas fa-sign-out-alt fa-2x"></i>
      </label>
    </div>
  </section>
)

export default UserInfoBar