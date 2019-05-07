class AddSenderToMessage < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :sender, :string, null: false
  end
end
