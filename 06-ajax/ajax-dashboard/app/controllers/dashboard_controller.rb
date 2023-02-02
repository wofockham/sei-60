class DashboardController < ApplicationController
    def brother
        brother = %w[ Groucho Harpo Chico ].sample
        render :plain => brother
    end

    def time
        render :plain => Time.now.to_s
    end
    
    def uptime
        render :plain => `uptime`
    end

    def calls
        render :plain => rand(1..5000)
    end

    def info
        brother = %w[ Groucho Harpo Chico ].sample
        time = Time.now.to_s
        uptime = `uptime`

        render :json => {
            :brother => brother,
            :time => time,
            :uptime => uptime,
            :calls => rand(50..5000),
            :bushfires => rand(50..10_000),
            :butterflies => Butterfly.all
        }
    end
end
