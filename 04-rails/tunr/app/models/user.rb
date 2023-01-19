class User < ApplicationRecord
    has_many :mixtapes
    has_secure_password
    validates :email, :uniqueness => true, :presence => true
end
