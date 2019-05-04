class Api::ServersController < ApplicationController
  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id

    if @server.save
      UserServer.create!(user_id: current_user.id, server_id: @server.id)
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])
    if (@server)
      @server.destroy!
      # TODO: FIX THIS, does this work this way with actions now?
      # index
      render 'api/servers/show'
    else
      render json: { errors: "You cannot destroy a server that doesn't exist!" }, status: 404
    end
  end

  def index
    @servers = current_user.servers
    if @servers
      render 'api/servers/index'
    else
      render json: { errors: 'You cannot access a server you are not in!' }, status: 401
    end
  end

  def show
    @server = current_user.servers.find_by(id: params[:id])
    if @server
      render 'api/servers/show'
    else
      render json: { errors: 'You cannot access a server you are not in!'}, status: 401
    end
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end
end
