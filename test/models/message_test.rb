# == Schema Information
#
# Table name: messages
#
#  id               :bigint           not null, primary key
#  body             :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  sender           :string           not null
#  custom_timestamp :string           not null
#  channel_id       :integer          not null
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
