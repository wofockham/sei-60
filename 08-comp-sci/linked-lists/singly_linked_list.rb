class SinglyLinkedList
    class Node
        attr_accessor :value, :next
        
        def initialize(value=nil)
            @value = value
            @next = nil
        end
    end

    attr_accessor :head

    def initialize(value=nil)
        @head = Node.new(value) unless value.nil?
    end

    def prepend(value) # unshift
        node = Node.new value
        node.next = @head
        @head = node
        self # allow chaining
    end

    def append(value) # push
        last.next = Node.new value
        self # allow chaining
    end

    def last
        current_node = @head
        while current_node && current_node.next
            current_node = current_node.next
        end
        current_node
    end

    # TODO: More methods
    def remove # AKA .shift -- remove the first node
    end

    def insert_after(node, new_value)
    end

    def find(needle) # return the node with the value of needle (or nil)
    end

    # Tricky
    def reverse # non-destructive
    end

    # Trickier
    def reverse! # destructive
    end

    # Trickiest
    def each # How do you execute a block in Ruby?
    end

    # Bonus: .map(), .reduce(), .select(), .reject(), .length() AKA .size() AKA .count()
    # Bonus: .at_index(3) # equivalent to bros[3]
end


bros = SinglyLinkedList.new 'Groucho'
bros.prepend 'Harpo'
bros.prepend 'Chico'

# chico, harpo, groucho

binding.irb
