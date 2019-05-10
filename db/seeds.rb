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
User.create!(username: 'xXdragonmasterXx', email:'dragon@gmail.com', password: 'password')
User.create!(username: 'ginger_baker', email:'gbaker@gmail.com', password: 'password')
User.create!(username: 'lil_wizard_boi', email:'wiz@gmail.com', password: 'password')

user_1 = User.find_by(username: 'demo_user')
user_2 = User.find_by(username: 'dowinterfor6')
user_3 = User.find_by(username: 'username')
user_4 = User.find_by(username: 'xXdragonmasterXx')
user_5 = User.find_by(username: 'ginger_baker')
user_6 = User.find_by(username: 'lil_wizard_boi')

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

# TESTING DELETE

Server.create!(name: "Another bakers hangout", owner_id: user_5.id, invite_link: "discourse_invite/2o03IdUt26=ZDZVZ1fEcjA")
Server.create!(name: "Best server NA", owner_id: user_2.id, invite_link: "discourse_invite/2o03IdUt26KdDZVZ1fEcjA")
Server.create!(name: "Club Penguin lives on", owner_id: user_3.id, invite_link: "discourse_invite/2o03IdUt2sKZDZVZ1fEcjA")
Server.create!(name: "Dungeons and Dragons", owner_id: user_4.id, invite_link: "discourse_invite/2o03IdUt26KZDZcZ1fEcjA")

server_4 = Server.find_by(name: "Another bakers hangout")
server_5 = Server.find_by(name: "Best server NA")
server_6 = Server.find_by(name: "Club Penguin lives on")
server_7 = Server.find_by(name: "Dungeons and Dragons")

UserServer.create!(user_id: user_1.id,server_id: server_4.id)
UserServer.create!(user_id: user_1.id,server_id: server_5.id)
UserServer.create!(user_id: user_1.id,server_id: server_6.id)
UserServer.create!(user_id: user_1.id,server_id: server_7.id)

UserServer.create!(user_id: user_5.id,server_id: server_4.id)
UserServer.create!(user_id: user_2.id,server_id: server_5.id)
UserServer.create!(user_id: user_3.id,server_id: server_6.id)
UserServer.create!(user_id: user_4.id,server_id: server_7.id)
UserServer.create!(user_id: user_6.id,server_id: server_7.id)

Message.destroy_all

Message.create!(body: 'This is a test for Demo user\'s crappy server', sender: 'Admin', custom_timestamp: 'At the beginning of time', channel_id: server_1.id)
Message.create!(body: 'This is a test for THE bakers\'s hangout', sender: 'Admin', custom_timestamp: 'At the beginning of time', channel_id: server_3.id)
Message.create!(body: "Honestly, I've been to ginger baker's bakery and it's not as amazing as everyone says it is. The pastries are nice and fresh, but don't really stand out from the crowd. I've been to other bakeries in the area where the mere smell of the food is enough to entice you to walk in and try out their stuff, while ginger baker's place doesn't really have that type of draw to it. The prices are good though, and that's what keeps me coming back. The doughnuts are a classic, but the croissants are average at best, and they are usually left so long on the counter that they end up turning slightly cold, and aren't reheated thoroughly before serving to customers. They do have a deal where you can buy a pastry paired with some coffee for a discount, and while it is also a very good deal, the coffee is mediocre at best - what else would you expect from a bakery making coffee? The taste is slightly watered down, and the coffee isn't hot enough. Overall, while it is a cheap place, I feel like ginger baker's bakery isn't somewhere I would recommend to a friend for quality, but rather for convenience and price. I'm wondering if anyone else has had a similar experience, or if there are better places with comparable prices that I can visit to experience higher quality pastries? I am a big fan of chocolate croissants and would really appreciate suggestions for a bakery that makes them the right way. Sorry for the long message.", sender: 'A salty pastry enthusiast', custom_timestamp: 'May 10th 2019, 11:22:08 am', channel_id: server_3.id)
Message.create!(body: "This is my server", sender: "xXdragonmasterXx", custom_timestamp: "May 10th 2019, 11:42:02 am", channel_id: server_7.id)
Message.create!(body: "That's debatable...", sender: "lil_wizard_boi", custom_timestamp: "May 10th 2019, 11:43:19 am", channel_id: server_7.id)