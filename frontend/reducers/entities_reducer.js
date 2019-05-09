import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import messagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  messages: messagesReducer
})

export default entitiesReducer;