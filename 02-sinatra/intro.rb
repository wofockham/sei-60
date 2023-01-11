require 'sinatra'
require 'sinatra/reloader'

get '/hello' do
    "Hello Cruel World from Sinatra!"
end

get '/goodbye' do
    "Hello World"
end

# Dynamic content
get '/lucky' do
    "Here is your lucky number #{ rand 1..40 }"
end

get '/uptime' do
    "The server uptime is #{ `uptime` }"
end

# Dynamic URLs

# Marx Brothers Fan Club: $500

# This supports an infinite number of URLs:
get '/fanclub/:name' do
    "#{ params[:name].capitalize } is a proud member of the Marx Brothers fan club"
end

# $700
get '/fanclub/:first/:last' do
    "#{ params[:first].capitalize } #{ params[:last].upcase } is a premium member of the Marx Brothers fan club"
end

# Second crappiest calculator of the course
get '/multiply/:x/:y' do
    result = params[:x].to_f * params[:y].to_f
    "The result is <strong>#{ result }</strong>"
end

# TWO SERIOUS COMPLAINTS
# If this is a web server, where is the goddamn HTML?
# How do we get user input without making the poor slobs edit the URL by hand?