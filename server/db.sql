CREATE TABLE species (
  animal_id SERIAL PRIMARY KEY, 
  common_name TEXT NOT NULL, 
  scientific_name TEXT UNIQUE NOT NULL, 
  estimated_population INTEGER, 
  conservation_status_code TEXT, 
  record_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO species (common_name, scientific_name, estimated_population, conservation_status_code) 
VALUES ('Jaguar', 'Panthera onca', 173, 'NT'), 
('Sea Turtle', 'Cheloniidae', 892, 'EN'), 
('Bald Eagle', 'Halieetus leucocephalus', 321, 'LC');

CREATE TABLE individuals (
    individual_animal_id SERIAL PRIMARY KEY,
    nickname TEXT NOT NULL,
    species TEXT,
    record_created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO individuals (nickname, species) VALUES ('Sammy Swim', 'Sea Turtle'), ('Cloud Sky', 'Bald Eagle');