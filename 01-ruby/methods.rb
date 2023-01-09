# def hello
#     puts "Hello world"
# end

# hello

# input
def hello(name="World") # default parameter
    puts "Hello #{ name }"
end

hello 'Maggy'
hello # variadic

# output: return values
def add(a, b)
    a + b # implicit return
end

puts "The sum of 8 and 24 is #{ add(8, 24) }"