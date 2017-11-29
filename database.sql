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
is_checked_in BOOLEAN,
owner_id INT
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

INSERT INTO pets ("name", breed, color, owner_id)
VALUES ('Mongo', 'Bull Dog', 'Grey', 2),
('Chappy', 'Shitzu', 'purple', 1),
('Huckelberry', 'Labrador', 'chocolate', 3);


--for the GET route to display the table at the bottom of the home page
SELECT * FROM pets
LEFT OUTER JOIN owners
ON owners.id = pets.owner_id;