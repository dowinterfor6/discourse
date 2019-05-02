import React from 'react';
import {Link} from 'react-router-dom';
import ChannelIndex from '../channel_content/channel_index';
import LandingChannelContainer from '../channel_content/landing_channel_container';

class serverIndex extends React.Component {
  constructor(props) {
    super(props);
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
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li className="add-server-icon">+</li>
          </ul>
        </aside>
        <LandingChannelContainer />
        {/* <LandingChannel logout={this.props.logout}/> */}
        {/* <ChannelIndex logout={this.props.logout}></ChannelIndex> */}
      </div>
    )
  }
}

export default serverIndex;