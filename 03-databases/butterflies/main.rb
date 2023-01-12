require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX: show all the butterflies
get '/butterflies' do
    # get all the butterflies from the DB
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    @butterflies = db.execute "SELECT * FROM butterflies"
    erb :butterflies_index
end