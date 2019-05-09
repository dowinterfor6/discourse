class AddChannelIdToMessagesAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :channel_id, :integer, null: false
  end
end
