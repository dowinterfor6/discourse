export const userIndex = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);