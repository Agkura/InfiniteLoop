Rails.application.routes.draw do
  get 'answers/create'

  get 'answers/destroy'

  get 'answers/update'

  get 'answers/show'

  get 'questions/create'

  get 'questions/destroy'

  get 'questions/udpate'

  get 'questions/show'

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
  end
end
