export const serverIndex = () => (
  $.ajax({
    method: 'GET',
    url: '/api/servers'
  })
);

export const showServer = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/server',
    data: { id }
  })
);

export const createServer = (server) => (
  $.ajax({
    method: 'POST',
    url: '/api/server',
    data: { server }
  })
)