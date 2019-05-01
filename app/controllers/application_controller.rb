class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception 

  helper_method :current_user, :logged_in?

  
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
  
  private

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { errors: ['You must be logged in'] }, status: 401 # Double check this
    end
  end

end
