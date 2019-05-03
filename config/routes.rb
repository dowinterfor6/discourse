Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :destroy, :show, :index]
  end

  root "static_pages#root"
end
