import * as APIUtil from "../util/server_api_util";

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS"; //Index, fetch
export const RECEIVE_SERVER = "RECEIVE_SERVER"; //Show
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const LEAVE_SERVER = "LEAVE_SERVER";

//Need current user info?
const receiveAllServers = (servers) => ({
  type: RECEIVE_ALL_SERVERS,
  servers
});

//Server
const receiveServer = (server) => ({
  type: RECEIVE_SERVER,
  server
});

//TODO: Passing in ID (to get from match.params.id)
const removeServer = ({id}) => ({
  type: REMOVE_SERVER,
  id
});

//TODO: MIGHT NOT WORK
const leaveServerAction = ({id}) => ({
  type: LEAVE_SERVER,
  id
})

const receiveErrors = (errors) => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

//TODO: Do i need this?
export const deleteServerErrors = () => (dispatch) => (
  dispatch(receiveErrors([]))
);

export const fetchAllServers = () => (dispatch) => (
  APIUtil.serverIndex()
    .then(
      (servers) => dispatch(receiveAllServers(servers)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
);

//TODO: Returns server, use .then
export const fetchServer = (id) => (dispatch) => (
  APIUtil.showServer(id)
    .then(
      (server) => dispatch(receiveServer(server)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const createServer = (newServer) => (dispatch) => (
  APIUtil.createServer(newServer)
    .then(
      (server) => dispatch(receiveServer(server)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
)

//TODO: returns information on action creator
export const deleteServer = (id) => (dispatch) => (
  APIUtil.deleteServer(id)
    .then(
      (server) => dispatch(removeServer(server)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const leaveServer = (id) => (dispatch) => (
  APIUtil.leaveServer(id)
    .then(
      (server) => dispatch(leaveServerAction(server))
    )
)

//TODO: CHECK ERRORS
export const joinServer = (link) => (dispatch) => (
  APIUtil.joinServer(link)
    .then(
      (server) => dispatch(receiveServer(server)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
)