n = 1001

if n > 5
    puts "Wow, that is a big number"
else
    puts "Wow, that is a smaller number"
end

# Ruby has a rich framework for asking questions (conditionals)
grade = 'F'

if grade == 'A'
    puts "You are killing it"
elsif grade == 'B'
    puts "You are coasting fine"
elsif grade == 'C'
    puts "Adequate"
else # default
    puts "Please see CJ after class"
end

# TODO: research Ruby's case statement

# Ruby's bonus conditionals

# Short AKA modifier AKA backwards conditionals
puts "Wow" if n > 5

# unless: opposite of if

today_is_wednesday = false

# if today_is_wednesday == false
#     puts "Today is not Wednesday"
# end

# if !today_is_wednesday
#     puts "Today is not Wednesday"
# end

unless today_is_wednesday
    puts "Today is not Wednesday"
end

# unless also supports the modifier form
puts "Today is not Wednesday" unless today_is_wednesday
# puts "Today is not Wednesday" if !today_is_wednesday