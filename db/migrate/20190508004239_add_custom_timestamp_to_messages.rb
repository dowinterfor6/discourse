class AddCustomTimestampToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :custom_timestamp, :string, null: false
  end
end
