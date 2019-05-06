class AddInviteLinkToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :invite_link, :string
  end
end
