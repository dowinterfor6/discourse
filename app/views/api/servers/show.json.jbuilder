json.partial! "api/servers/server", server: @server

json.users do
  @server.users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end