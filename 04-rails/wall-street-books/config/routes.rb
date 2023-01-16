Rails.application.routes.draw do
  root :to => 'pages#home' # 'controller#action'

  get '/books' => 'books#form'
  get '/books/info' => 'books#info'

  get '/stocks' => 'stocks#form'
  get '/stocks/info' => 'stocks#info'
end
