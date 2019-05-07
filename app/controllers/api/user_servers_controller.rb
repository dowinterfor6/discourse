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
end
