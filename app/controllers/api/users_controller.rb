class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show' #Is this the right place?
    else
      render json: @user.errors.full_messages, status: 422 #Is this the right status?
      #needs to only show until rerender, use flash.now?
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
