CREATE TABLE butterflies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    family TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO butterflies (name, family) VALUES ('Blue Triangle', 'Blue');
INSERT INTO butterflies (name, family) VALUES ('Monarch', 'Nymphalidae');
