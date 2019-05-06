# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(username: 'demo_user', email:'demo@gmail.com', password: 'password')
User.create!(username: 'dowinterfor6', email:'winter@gmail.com', password: 'dowinterfor6')
User.create!(username: 'username', email:'user@gmail.com', password: 'password')
User.create!(username: 'billybob', email:'billybob@gmail.com', password: 'password')
User.create!(username: 'ginger_baker', email:'gbaker@gmail.com', password: 'password')

user_1 = User.find_by(username: 'demo_user')
user_2 = User.find_by(username: 'dowinterfor6')
user_3 = User.find_by(username: 'username')
user_4 = User.find_by(username: 'billybob')
user_5 = User.find_by(username: 'ginger_baker')

Server.destroy_all
Server.create!(name: "Demo user's amazing server", owner_id: user_1.id, invite_link: "discourse_invite/4hPkZ5_oRK-pc53WBAU0MQ")
Server.create!(name: 'Elder Memes Online', owner_id: user_2.id, invite_link: "discourse_invite/EHIw9SswhUSwABrqsKzGvg")
Server.create!(name: "Bakers' hangout", owner_id: user_5.id, invite_link: "discourse_invite/2o03IdUt26KZDZVZ1fEcjA")

server_1 = Server.find_by(name: "Demo user's amazing server")
server_2 = Server.find_by(name: 'Elder Memes Online')
server_3 = Server.find_by(name: "Bakers' hangout")

UserServer.destroy_all
UserServer.create!(user_id: user_1.id,server_id: server_1.id)
UserServer.create!(user_id: user_2.id,server_id: server_1.id)
UserServer.create!(user_id: user_3.id,server_id: server_1.id)
UserServer.create!(user_id: user_4.id,server_id: server_1.id)
UserServer.create!(user_id: user_5.id,server_id: server_1.id)

UserServer.create!(user_id: user_2.id,server_id: server_2.id)
UserServer.create!(user_id: user_4.id,server_id: server_2.id)
UserServer.create!(user_id: user_5.id,server_id: server_2.id)

UserServer.create!(user_id: user_5.id,server_id: server_3.id)
UserServer.create!(user_id: user_1.id,server_id: server_3.id)
UserServer.create!(user_id: user_3.id,server_id: server_3.id)