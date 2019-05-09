class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.new(body: data['message'], sender: data['sender'], custom_timestamp: data['custom_timestamp'])
    if message.save
      # socket = { message: message.body, sender: message.sender, timestamp: message.custom_timestamp }
      socket = { message: message, type: 'message'}
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
    # TODO: Check data structure
    # message_bodies = Message.all.collect(&:body)
    # message_sender = Message.all.collect(&:sender)
    # message_timestamp = Message.all.collect(&:custom_timestamp)
    messages = Message.all
    message_arr = []
    messages.each do |message|
      message_el = { 
        body: message.body, 
        sender: message.sender, 
        custom_timestamp: message.custom_timestamp 
      }
      message_arr.push(message_el)
    end
    socket = { messages: message_arr, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
