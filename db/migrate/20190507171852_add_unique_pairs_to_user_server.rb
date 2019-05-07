class AddUniquePairsToUserServer < ActiveRecord::Migration[5.2]
  def change
    add_index :user_servers, [:user_id, :server_id], unique: true
  end
end
