Rails.application.routes.draw do
  root to: "static_pages#root"

  get '/api/questions/user_questions', to: 'api/questions#user_questions'
  get 'api/questions/trending', to: 'api/questions#trending'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :questions, except: [:new] do
      resources :answers, except: [:new]
    end

  end
end
