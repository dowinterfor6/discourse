class Api::UserServersController < ApplicationController
  def destroy
    @user_server = UserServer.find_by(server_id: params[:id])
    if @user_server
      @user_server.delete
      @server = Server.find_by(id: params[:id])
      render 'api/servers/show'
    else
      render json: ['Must be in the server before trying to leave it!'], status: 418
    end
  end

  def create
    @server = Server.find_by(invite_link: params[:invite_link])
    user_id = current_user.id
    @user_server = UserServer.new(user_id: user_id, server_id: @server.id)

    if @user_server.save
      render 'api/servers/show'
    else
      render json: @user_server.errors.full_messages, status: 422 #TODO: check status
    end
  end

  private

  def user_servers_params
    params.require(:user_server).permit(:invite_link)
  end
end
