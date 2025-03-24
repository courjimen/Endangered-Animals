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
    species TEXT REFERENCES species(scientific_name),
    record_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO individuals (nickname, species) 
VALUES ('Sammy Swim', 'Cheloniidae'), 
('Cloud Sky', 'Halieetus leucocephalus'),
('James Jump', 'Panthera onca');

CREATE TABLE sightings (
    sighting_number SERIAL PRIMARY KEY,
    sighting_datetime TIMESTAMP NOT NULL,
    individual_id INTEGER REFERENCES individuals(individual_animal_id),
    location TEXT,
    healthy BOOLEAN,
    sighter_email TEXT,
    record_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO sightings (sighting_datetime, individual_id, location, healthy, sighter_email)
VALUES ('2025-01-15 10:00:00', 1, 'Indian National Park', true, '[email address removed]'),
       ('2025-02-20 14:30:00', 2, 'Arctic Circle', true, '[email address removed]'),
       ('2025-03-10 09:15:00', 3, 'Savannah Grasslands', false, '[email address removed]'),
       ('2024-04-05 16:45:00', 2, 'Arctic Circle', true, '[email address removed]'),
       ('2024-05-22 11:00:00', 1, 'Indian National Park', true, '[email address removed]');
