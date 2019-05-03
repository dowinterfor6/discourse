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
    data: { server }
  })
)

export const deleteServer = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/servers/${id}`
  })
)