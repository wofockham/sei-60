class CalculatorController < ApplicationController
    def calculate
        @x = params[:x].to_f
        @y = params[:y].to_f

        @result = case params[:operator]
        when '+' then @x + @y
        when '-' then @x - @y
        end
        
        # if you don't Rails what to render, it will render a view with the same name as the action
    end
end