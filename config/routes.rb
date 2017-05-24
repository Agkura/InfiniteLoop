Rails.application.routes.draw do
  root to: "static_pages#root"

  get '/api/questions/user_questions', to: 'api/questions#user_questions'
  get '/api/questions/trending', to: 'api/questions#trending'

  get '/api/search', to: 'api/search#search'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :questions, except: [:new] do
      resources :answers, except: [:new]
    end
    resources :votes, only: [:create, :edit]
    resources :question_votes, only: [:create, :edit]

  end
end
