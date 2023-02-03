# Fibonacci sequence: fib(n) = fib(n-1) + fib(n-2)
def fibonacci_iterative(n)
    a = 1
    b = 1
    while n > 2
        a, b = b, a + b # Atomic parallel assignment
        n -= 1
    end

    b
end

binding.irb
