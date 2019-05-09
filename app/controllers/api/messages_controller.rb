class Api::MessagesController < ApplicationController
  def index
    # @messages = Message.all
    @messages = Message.where(channel_id: params[:server_id])
    render 'api/messages/index'
  end
end
