class PagesController < ApplicationController
  def home
    @brother = %w[ Groucho Harpo Chico ].sample
    @time = Time.now.to_s
    @uptime = `uptime` # This won't work on Heroku
    @calls_on_hold = rand 1..5000
    @bushfires = rand 50..10_000
  end
end
