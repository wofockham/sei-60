CREATE TABLE IF NOT EXISTS plants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO plants (name) VALUES ('Milkweed');
INSERT INTO plants (name) VALUES ('Lantana');
