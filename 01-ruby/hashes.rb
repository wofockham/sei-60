# # Array and Hash access

# ### A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]

# 1. How would you return the string `"Erik"`?
p a[1]
# 1. How would you add your name to the array?
a << 'Jorge'

# ### B. Given the following data structure:

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# 1. How would you return the string `"One"`?
p h[1]
# 1. How would you return the string `"Two"`?
p h[:two]
# 1. How would you return the number `2`?
p h["two"]
# 1. How would you add `{3 => "Three"}` to the hash?
h[3] = "Three"
# 1. How would you add `{:four => 4}` to the hash?
h.merge!({:four => 4})

# ### C. Given the following data structure:

# ```ruby
is = {true => "It's true!", false => "It's false"}
# ```

# 1. What is the return value of `is[2 + 2 == 4]`?
p is[2 + 2 == 4]
# 1. What is the return value of `is["Erik" == "Jonathan"]`?
p is["Erik" == "Jonathan"]
# 1. What is the return value of `is[9 > 10]`?
p is[9 > 10]
# 1. What is the return value of `is[0]`?
p is[0]
# 1. What is the return value of `is["Erik"]`?
p is["Erik"]

# ### D. Given the following data structure:

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  }
}

# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
p users["Jonathan"][:twitter]
# 1. How would you add the number `7` to Erik's favorite numbers?
users["Erik"][:favorite_numbers] << 7
# 1. How would you add yourself to the users hash?
users["Jorge"] = {
    :twitter => "edwardawkward",
    :favorite_numbers => [666, 420, 69, 12, 42]
}
# 1. How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]
# 1. How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min
# 1. How would you return an array of Anil's favorite numbers that are also even?

# .each
# evens = []
# users["Anil"][:favorite_numbers].each do |n|
#     evens << n if n.even?
# end

# .select
evens = users["Anil"][:favorite_numbers].select do |n|
    n.even?
end

p evens

# 1. How would you return an array of the favorite numbers common to all users?
p users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Jorge"][:favorite_numbers]

# You are not expected to understand this (yet)
p users.values.map { |data| data[:favorite_numbers] }.inject &:&

# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
p users.values.map { |data| data[:favorite_numbers] }.flatten.sort.uniq
