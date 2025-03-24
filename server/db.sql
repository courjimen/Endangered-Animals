CREATE TABLE individuals (
    individual_animal_id SERIAL PRIMARY KEY,
    nickname TEXT NOT NULL,
    species TEXT,
    record_created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO individuals (nickname, species) VALUES ('Sammy Swim', 'Sea Turtle'), ('Cloud Sky', 'Bald Eagle');