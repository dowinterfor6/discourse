# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  invite_link :string           not null
#

class Server < ApplicationRecord
  validates :name, :owner_id, :invite_link, presence: true

  has_many :user_servers
  has_many :users, through: :user_servers
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
    
  after_initialize :ensure_invite_link

  private

  def ensure_invite_link
    unless self.invite_link
      self.invite_link = generate_invite_link
      while (Server.find_by(invite_link: self.invite_link))
        self.invite_link = generate_invite_link
      end
    end
  end

  def generate_invite_link
    "discourse_invite/" + SecureRandom.urlsafe_base64
  end

end
