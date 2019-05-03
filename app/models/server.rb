# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
  validates :name, :owner_id, presence: true

  has_many :user_servers
  has_many :users, through: :user_servers
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
    
end
