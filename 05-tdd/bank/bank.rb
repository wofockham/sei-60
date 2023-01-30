class Bank
    attr_reader :name, :accounts # macro to write a getter for you

    def initialize(name)
        @name = name
        @accounts = {}
    end

    def create_account(name, starting_deposit)
        @accounts[name] = starting_deposit
    end

    def deposit(name, amount)
        @accounts[name] += amount
    end

    def withdraw(name, amount)
        @accounts[name] -= amount unless amount > @accounts[name]
    end

    def balance(name)
        @accounts[name]
    end
end
