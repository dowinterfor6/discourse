export const getChatHistory = () => (
  $.ajax({
    method: 'GET',
    url: '/api/messages'
  })
)