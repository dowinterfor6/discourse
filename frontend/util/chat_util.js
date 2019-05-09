export const getChatHistory = (server_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/servers/${server_id}/messages`
  })
)