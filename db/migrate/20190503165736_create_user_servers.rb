class CreateUserServers < ActiveRecord::Migration[5.2]
  def change
    create_table :user_servers do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end

    add_index :user_servers, :user_id
    add_index :user_servers, :server_id
  end
end
