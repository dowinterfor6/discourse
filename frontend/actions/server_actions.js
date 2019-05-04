import * as APIUtil from "../util/server_api_util";

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS"; //Index, fetch
export const RECEIVE_SERVER = "RECEIVE_SERVER"; //Show
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const REMOVE_SERVER = "REMOVE_SERVER";

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

//TODO: What do i pass in here?! is this what server controller renders?
const removeServer = ({id}) => ({
  type: REMOVE_SERVER,
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
      (errors) => dispatch(receiveErrors(errors))
    )
);

export const fetchServer = (id) => (dispatch) => (
  APIUtil.showServer(id)
    .then(
      (server) => dispatch(receiveServer(server)),
      (errors) => dispatch(receiveErrors(errors))
    )
);

//TODO: state id doesn't match server ID
//TODO: new server isn't created as an object
export const createServer = (newServer) => (dispatch) => (
  APIUtil.createServer(newServer)
    .then(
      (server) => dispatch(receiveServer(server)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const deleteServer = () => (dispatch) => (
  APIUtil.deleteServer()
    .then(
      (server) => dispatch(removeServer(server)),
      (errors) => dispatch(receiveErrors(errors))
    )
)