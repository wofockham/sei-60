# 5! = 5 * 4 * 3 * 2 * 1 # iterative
# 5! = 5 * 4!

def factorial_iterative(n) # initial
    result = 1
    while n > 0           # conditional
        result *= n       # mutation
        n -= 1            # update: mutation
    end
    result # implicit return
end

def factorial_recursive(n)
    if n <= 1 # base case
        1
    else
        n * factorial_recursive(n-1) # move closer to the base case: no mutation        
    end
end

binding.irb