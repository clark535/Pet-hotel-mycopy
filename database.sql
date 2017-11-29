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