import React from 'react';

class ActivityDisplay extends React.Component {

  render() {
    return (
      <section className="activity-display-container" scrolling="no">
        <ul className="activities-display-list">
          <li>
            <img 
              src="https://cdn.discordapp.com/attachments/560127966688837672/576154925030178832/FO76.png" 
              alt="Fallout 76" 
              className="activity-photo-content"
            />
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
            <img 
              className="activity-photo-content" 
              src="https://cdn.discordapp.com/attachments/560127966688837672/576154925235568640/HL3.png" 
              alt="Halflife 3" 
            />
            <div className="activity-content-text">
              Half-Life 3 is the most elusive sequel in gaming history. There have been
              multiple false reports of the game being in development, but have been 
              squashed by critics who severely doubt Valve's counting ability. "Two is the
              highest the company can count to, there's no denying that fact!" - Angry Steam Review
            </div>
          </li>
          <li>
            <img
              className="activity-photo-content"
              src="https://cdn.discordapp.com/attachments/560127966688837672/576154933028585515/MHW.png"
              alt="Monster Hunter World"
            />
            <div className="activity-content-text">
              Monster Hunter Go, the long awaited collaboration between Capcom and Niantic,
              introducing the beasts of the Monster Hunter series into the world of AR (augmented
              reality). Experience your world like never before, preparing for battles around
              every corner, hunting the elusive Silver Rathalos, or running for your life from
              the vicious Lunastra.
            </div>
          </li>
          <li>
            <img
              className="activity-photo-content"
              src="https://cdn.discordapp.com/attachments/560127966688837672/576154929182277655/MGS-kojima.png"
              alt="Kojima Productions"
            />
            <div className="activity-content-text">
              Metal Gear Solid: Kojima Returns is the latest installment in the MGS series. 
              After being ousted from Konami productions, Hideo Kojima became an icon of hope
              and inspiration for fans of the game, who have come together to create a fan-made 
              sequel to the popular series.
            </div>
          </li>
          <li>
            <img
              className="activity-photo-content"
              src="https://cdn.discordapp.com/attachments/560127966688837672/576154932323811339/LOL.png"
              alt="League of Legends"
            />
            <div className="activity-content-text">
              Following the success of the game for over a decade, Riot Games have decided 
              to live up to the plural in their company name, and have released the sequel;
              League of Legends 2: Legends Royale. Dropped in the unforgiving landscape of
              Summoner's Saltmine, champions must scavenge the area for items to enhance 
              their abilities and fight each other to the death.
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default ActivityDisplay;