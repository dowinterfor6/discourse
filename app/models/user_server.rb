# == Schema Information
#
# Table name: user_servers
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserServer < ApplicationRecord
  validates :user_id, :server_id, presence: true
  validates :user_id, uniqueness: { scope: :server_id }

  belongs_to :user
  belongs_to :server
end
