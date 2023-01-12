CREATE TABLE pets (
    id INTEGER PRIMARY KEY,
    name TEXT,
    breed TEXT,
    alive BOOLEAN
);

-- seed data (optional)
INSERT INTO pets (id, name, breed, alive) VALUES (1, 'Fluffy', 'unicorn', 1);
INSERT INTO pets (id, name, breed, alive) VALUES (2, 'Gigantor', 'robot', 0);
