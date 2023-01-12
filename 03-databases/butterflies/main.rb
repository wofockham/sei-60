require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX: show all the butterflies
get '/butterflies' do
    @butterflies = query_db "SELECT * FROM butterflies"
    erb :butterflies_index
end

# NEW: display a form for entering details about a new butterfly
get '/butterflies/new' do
    erb :butterflies_new
end

# CREATE: insert a new butterfly into the database
post '/butterflies' do
    query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
    redirect to('/butterflies') # GET request -- go back to the INDEX
end

# SHOW: show a single butterfly in more detail
get '/butterflies/:id' do
    butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    @butterfly = butterflies.first # pluck the single butterfly from the array of results
    erb :butterflies_show
end

# EDIT: show a form to allow the user to edit an existing butterfly
get '/butterflies/:id/edit' do
    # get the butterfly from the database
    butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    @butterfly = butterflies.first
    erb :butterflies_edit
end

post '/butterflies/:id' do
    query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/butterflies/#{ params[:id ] }") # GET request to SHOW
end

get '/butterflies/:id/delete' do
    query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
    redirect to('/butterflies')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end