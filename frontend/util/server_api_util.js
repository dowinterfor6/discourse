export const serverIndex = () => (
  $.ajax({
    method: 'GET',
    url: '/api/servers'
  })
);

export const showServer = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/servers/${id}`
  })
);

export const createServer = (server) => (
  $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: server
  })
)

export const deleteServer = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/servers/${id}`
  })
)

export const leaveServer = (serverId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/user_servers/${serverId}`
  })
)

export const joinServer = (link) => (
  $.ajax({
    method: 'POST',
    url: '/api/user_servers',
    data: {
      invite_link: link
    }
  })
)