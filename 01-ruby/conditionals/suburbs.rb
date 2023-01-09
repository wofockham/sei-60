# ### 3. Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "In which suburb do you reside: "
residence = gets.chomp.capitalize

# v2: case
puts case residence
when 'Bondi'
    "Real beaches fake people"
when 'Glebe'
    "Nice foreshore walk"
when 'Ultimo'
    "Industrial chic"
when 'Newcastle'
    "Something about crystal meth"
else
    "I'm sure that's a very nice place"
end

# v1: if/elsif
# if residence == 'Bondi'
#     puts "Real beaches fake people"
# elsif residence == 'Glebe'
#     puts "Nice foreshore walk"
# elsif residence == 'Ultimo'
#     puts "Industrial chic"
# elsif residence == 'Newcastle'
#     puts "Something about crystal meth"
# else
#     puts "I'm sure that's a very nice place"
# end
