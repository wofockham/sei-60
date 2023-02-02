class ButterfliesController < ApplicationController
    def index
        butterflies = Butterfly.all
        render :json => butterflies
    end

    def show
        butterfly = Butterfly.find params[:id]
        render :json => butterfly
    end
end
