Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :questions, except: [:new] do
      resources :answers, except: [:new]
    end

  end
end
