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
#

class Message < ApplicationRecord
end
