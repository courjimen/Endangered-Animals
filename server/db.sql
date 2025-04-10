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
    nickname TEXT UNIQUE NOT NULL,
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
    animal_nickname TEXT REFERENCES individuals(nickname),
    location TEXT,
    healthy BOOLEAN,
    sighter_email TEXT,
    record_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO sightings (sighting_datetime, animal_nickname, location, healthy, sighter_email)
VALUES ('2025-01-15 10:00:00', 'Sammy Swim', 'Indian National Park', true, 'insertemail@here.com'),
       ('2025-02-20 14:30:00', 'Cloud Sky', 'Arctic Circle', true, 'insertemail@here.com'),
       ('2025-03-10 09:15:00', 'James Jump', 'Savannah Grasslands', false, 'insertemail@here.com'),
       ('2024-04-05 16:45:00', 'Cloud Sky', 'Arctic Circle', true, 'insertemail@here.com'),
       ('2024-05-22 11:00:00', 'James Jump', 'Indian National Park', false, 'insertemail@here.com');
