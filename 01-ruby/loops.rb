# while true
#     puts "wow"
# end

# Control-c to cancel a running Ruby program

# while
# initialize, conditional, update

i = 0        # initialize
while i < 10 # conditional
    puts "i is now #{ i }"
    i += 1   # update
end

# Bonus:
# if    => unless
# while => until

i = 0
until i == 10
    puts "i is now #{ i }"
    i += 1
end

# Iterators: Ruby's preferred method of looping/iterating
# No mess, no fuss

7.times { puts "Hello world" }

7.times do
    puts "Hello world"
end

10.times do |i|
    puts "i is now #{ i }"
end

7.downto(0) do |n|
    puts "n is now #{ n }"
end