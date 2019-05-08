class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    # TODO: data needs to contain both sender as a string and body
    # TODO: might not actually work
    message = Message.create(body: data['message'], sender: data['sender'], custom_timestamp: data['timestamp'])
    socket = { message: message.body, sender: message.sender, timestamp: message.custom_timestamp }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
