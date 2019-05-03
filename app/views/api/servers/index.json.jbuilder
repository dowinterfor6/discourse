json.array! @servers do |server|
  json.partial! "api/servers/server", server: server
end