class ChangeInviteLinkInServers < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :invite_link, :string
    add_column :servers, :invite_link, :string, null: false
  end
end
