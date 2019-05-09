class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all

    render 'api/messages/index'
  end
end
