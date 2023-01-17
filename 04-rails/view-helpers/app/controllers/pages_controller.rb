class PagesController < ApplicationController
    def home
    end

    def numbers
        @amount = 232.235
        @large_number = 343894793847
        @phone_number = 2125551212
    end

    def text
        @numbers = (1..20).to_a.shuffle
        @story = "A very very very very very very very very long time ago in a galaxy far far far far far far far away"
        @friend_count = 2
        @enemy_count = 853
    end

    def assets
    end

    def url
    end
end
