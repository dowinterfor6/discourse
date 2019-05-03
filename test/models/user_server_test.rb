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

require 'test_helper'

class UserServerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
