# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(id: 1, username: 'demo_user', email:'demo@gmail.com', password: 'password')
User.create!(id: 2, username: 'dowinterfor6', email:'winter@gmail.com', password: 'dowinterfor6')
User.create!(id: 3, username: 'username', email:'user@gmail.com', password: 'password')
User.create!(id: 4, username: 'billybob', email:'billybob@gmail.com', password: 'password')
User.create!(id: 5, username: 'ginger_baker', email:'gbaker@gmail.com', password: 'password')

Server.destroy_all
Server.create!(id: 1, name: "Demo user's amazing server", owner_id: 1)
Server.create!(id: 2, name: 'Elder Memes Online', owner_id: 2)
Server.create!(id: 3, name: "Bakers' hangout", owner_id: 5)

UserServer.destroy_all
UserServer.create!(user_id: 1,server_id: 1)
UserServer.create!(user_id: 2,server_id: 1)
UserServer.create!(user_id: 3,server_id: 1)
UserServer.create!(user_id: 4,server_id: 1)
UserServer.create!(user_id: 5,server_id: 1)

UserServer.create!(user_id: 2,server_id: 2)
UserServer.create!(user_id: 4,server_id: 2)
UserServer.create!(user_id: 5,server_id: 2)

UserServer.create!(user_id: 5,server_id: 3)
UserServer.create!(user_id: 1,server_id: 3)
UserServer.create!(user_id: 3,server_id: 3)