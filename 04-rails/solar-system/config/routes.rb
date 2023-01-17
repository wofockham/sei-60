Rails.application.routes.draw do
  # This file will cause the most suffering today.
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new', :as => 'new_planet'
  post '/planets' => 'planets#create'
  get '/planets/:id' => 'planets#show', :as => 'planet'
end
