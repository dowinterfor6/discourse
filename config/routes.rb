Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :destroy, :show, :index] do
      resources :messages, only: [:index]
    end
    resources :user_servers, only: [:destroy, :create]
  end

  mount ActionCable.server, at: '/cable'

  root "static_pages#root"
end
