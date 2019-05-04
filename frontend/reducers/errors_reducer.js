import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import serversErrorsReducer from "./servers_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  servers: serversErrorsReducer
})

export default errorsReducer;