Rails.application.routes.draw do
  devise_for :users, skip: [:sessions, :passwords, :registrations, :confirmations, :unlocks], controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  devise_scope :user do
    get '/login' => 'devise/sessions#new', as: :new_user_session
    post '/login' => 'devise/sessions#create', as: :user_session
    delete '/logout' => 'devise/sessions#destroy', as: :destroy_user_session
  end

  scope :constraints => { :format => // } do
    get '/search' => 'search#index'

    root :to => 'home#index'
  end

  # unauthenticated do
  #   devise_scope :user do
  #     root 'devise/sessions#new', as: :root
  #   end
  # end

  # root :to => 'home#index
  # root :to => 'home#index', as: :authenticated_root
end
