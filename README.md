# Discourse - A Discord clone
[Live Demo!](https://discord-clone.herokuapp.com/#/)

Discourse is a platform for text chat aimed at gamers, inspired by Discord. Implementing Action Cable to utilize websocket connections, and backed by Rails and postgreSQL, Discourse operates with the popular React.js and Redux libraries on the front end. As of now, features are limited due to the 10 day time-frame, however may be updated in the near future to add additional functionality.

## Features
* Standard User Authentication utilizing session tokens and BCrypt encryption
* Users are assigned an avatar with the Discourse logo and a random background color
* Discourse servers can be created, and deleted only by their owner
* Invite 'codes' can be easily copied and sent to friends to join the server
* Each server has a chat room that can only be accessed by those on the server
* Chat is updated whenever someone sends a message, and chat history is automatically loaded

## Channel display page
A basic channel layout styled based off the official Discord styling and color palette is show upon navigating to a server. The chat history will show a default message encouraging users to send a message if there is no message history, and a list of users who are in the server is shown on the right. The document title changes according to the current server.
![Channel-display-page](https://github.com/dowinterfor6/discourse/blob/master/docs/images/server-screenshot-blurred.png)
The message display is managed by a conditional that checks whether or not any message history exists based on information fetched when the component is mounted, and renders either the default message or the message history.
```
if (this.state.messages.length === 0) {
  messageList =
  <li>
    <div className="message-sender">
      <div className="message-sender-name">
        There seems to be no previous messages... you can call dibs on 'first'!
      </div>
    </div>
  </li>
} else {
...
}
```
Each message in the message history is then displayed accordingly, based on the received information from the Action Cable subscription that was created upon component mounting. Each subsequent message will then be posted to the database and broadcasted to the relevant channels with information about the body, sender, and a custom timestamp that utilizes the Moment.js library to render a nicely formatted timestamp, and allow for relative time display if desired (e.g. 2 hours ago, now, etc.).
```
// In main channel component
received: (data) => {
  switch (data.type) {
    case 'message':
      this.setState({
        messages: this.state.messages.concat(
          {
            body: data.message.body,
            sender: data.message.sender,
            custom_timestamp: data.message.custom_timestamp
          }
        )
      });
      break;
    case 'messages':
      this.setState({
        messages: Object.values(data.messages)
      });
      break;
  }
}

// In message form component, on submit
let moment = require('moment');
let date = moment().format('MMMM Do YYYY, h:mm:ss a');
App.cable.subscriptions.subscriptions[0].speak({
  message: this.state.body,
  sender: this.props.currentUser.username,
  custom_timestamp: date,
  channel_id: this.props.match.params.id
});
```

## Automatically expanding input field
A deceptively difficult feature to implement was the expanding text field that had a maximum height before adding a scroll bar. This feature is used when typing or pasting long messages to accommodate for the length of the message to a certain degree, then adding a scroll bar when it exceeds the maximum height so the user can still continue typing. Submission of this input was also slightly complicated as it was a quality of life feature that pressing "Enter" should submit the field, while "Shift + Enter" should make a new line. 

![Channel-input-field](https://github.com/dowinterfor6/discourse/blob/master/docs/images/expanding-text-field-screenshot.png)

In order to implement this feature properly, the input had to be converted to a textarea, and the actual logic implemented in both CSS and JS constraints. A simple fix for the "Enter" and "Shift + Enter" keystrokes is implemented with the following handler: 

```
handleEnter(evt) {
  if (evt.which === 13 && !evt.shiftKey) {
    evt.preventDefault();
    this.callSpeak();
    // This handles the broadcasting of a message to the channel
  }
}
```

To handle the expanding text field, a method had to be written that changes the text area input size based on the content, with a defined minimum and maximum. The minimum size is defined by the (lack of) scroll and CSS, while the maximum is determined by just the CSS constraint. Upon field update, the field is reset to account for potential copy/pasting that can affect the size, and then resized to the appropriate size, with the container and decorative divider increased as well.

```
resizeTextarea(e) {
  let currentTarget = e.currentTarget;
  currentTarget.style.height = "1px";
  currentTarget.style.height = (currentTarget.scrollHeight) + "px";
  let container = document.getElementsByClassName('message-form-container')[0];
  container.style.height = "1px";
  container.style.height = (65 + currentTarget.scrollHeight) + "px";
}
```

While this handles the expanding of the text field, a separate method is required to reset the text area and container to default heights upon submission.

## User Authentication errors
By combining both HTML validations as well as custom backend validations, multiple errors can be rendered to ensure all conditions are properly met before attempting to save a user's information to the database. Errors can appear next to the appropriate field by parsing through the error and determining which one it is associated with.

![User-Authentication-error-screenshot](https://github.com/dowinterfor6/discourse/blob/master/docs/images/user-auth-errors.png)

An alternative, more efficient method would be saving the errors under respective slices of state and render accordingly, however, due to time constraints and the (relatively) small variety of errors that could be thrown, the approach of parsing through the actual error itself is adopted to save time.

# Project Design

Discourse was designed to be a clone of Discord, imitating the simplistic but effective design, implementing features only if necessary and if it enhanced the user experience. With the short time period of two weeks, many features had to be left out in order to complete as many MVPs (minimum viable products) as possible, however due to the learning and implementing of action cable, many crucial features could not be implemented without additional time. 

## Technologies

As mentioned prior, Discourse utilizes a React and Redux frontend in order to handle (presentational) components and state through various actions and reducers. The backend is comprised of a postgreSQL database managed by Ruby on Rails, chosen for its' simplicity and RESTful routes. Although not the most popular technologies nowadays, these were chosen as the best fit for a project with a short time period. 

## Potential features

Without a time limit, the following features should also have been implemented:
* Channel CRUD within servers
* Separate chatrooms for each channel
* Private mssaging
* Ability to upload user/server avatars
* Pasting invite link direclty to URL for invite
* Checking user subscription to channel (green dot for 'online' users)
