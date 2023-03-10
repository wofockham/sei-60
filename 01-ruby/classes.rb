# GOAL:
# class Butterfly < ActiveRecord::Base
# end

# An object is like a hash -- it has key/value pairs
# BUT you have to predefine the keys.
# A strict hash: you have to predefine the shape.
# Also, unlike a Ruby hash, an object can have custom methods (functions inside the object)

class Actor
    def award_speech
        "I would like to thank my agent and my partner. We did it baby!"
    end

    def deny_allegations
        "I deny that and I don't remember and I was drunk and he's not my type" # Kevin Spacey defense
    end
end

class Stooge < Actor
    def terrible?
        true
    end
end

class MarxBrother < Actor
    attr_accessor :name, :instrument, :vice # macro to write getter and setters

    def initialize(n='', i='', v='lampooning authority')
        @name = n
        @instrument = i        
        @vice = v
    end

    def play
        "My name is #{ @name } and I play the #{ @instrument }"
    end
end

groucho = MarxBrother.new 'Groucho Marx', 'guitar', 'cigars'
groucho.name= 'Groucho'

binding.irb

