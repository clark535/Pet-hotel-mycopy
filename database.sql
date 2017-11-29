--database name is: pet_hotel

CREATE TABLE owners (
id SERIAL PRIMARY KEY,
first_name VARCHAR(80),
last_name VARCHAR(80)
);

CREATE TABLE pets (
id SERIAL PRIMARY KEY,
name VARCHAR(80),
breed VARCHAR(80),
color VARCHAR(80),
is_checked_in BOOLEAN
);

CREATE TABLE visits (
id SERIAL PRIMARY KEY,
check_in_date INT,
check_out_date INT
);

INSERT INTO owners (first_name, last_name)
VALUES ('Johnny', 'Ringo'),
('Elanor', 'Roosevelt'),
('Doc', 'Holiday');

INSERT INTO pets ("name", breed, color, is_checked_in)
VALUES ('Mongo', 'Bull Dog', 'Grey', true),
('Chappy', 'Shitzu', 'purple', true),
('Huckelberry', 'Labrador', 'chocolate', true);

--for the GET route to display the table at the bottom of the home page
SELECT * FROM owners
LEFT OUTER JOIN pets
ON owners.id = pets.id;