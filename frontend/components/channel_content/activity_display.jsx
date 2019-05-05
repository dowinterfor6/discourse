import React from 'react';

class ActivityDisplay extends React.Component {

  render() {
    return (
      <section className="activity-display-container" scrolling="no">
        <ul className="activities-display-list">
          <li>
            <div className="activity-content-text">
              In Fallout 76, the first nuke is launched and it has a huge effect:
              deathclaws get wings, the world is thrown into a nuclear winter,
              and technology is set back to the Iron Age. Your player wakes up in a cart
              with his hands bound, greeted by the fresh smell of pine and the voices
              of a few other men. "Hey you, finally awake? You were trying to cross
              the border right?" one of them asks, as a title appears in the sky:
              "Elder Scrolls V: Skyrim".
        </div>
          </li>
          <li>
            <img className="activity-photo-content" src="https://cdn.wccftech.com/wp-content/uploads/2016/09/Half-Life-3.jpg" alt="Halflife 3" />
          </li>
          <li>Very creative fun stuff</li>
          <li>Honestly running out of ideas</li>
          <li>Half Life 3</li>
          <li>Sanic the hedgehog</li>
          <li>League of Salt</li>
        </ul>
      </section>
    )
  }
}

export default ActivityDisplay;