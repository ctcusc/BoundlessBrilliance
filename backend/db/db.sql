DROP TABLE IF EXISTS user_status;
DROP TABLE IF EXISTS workshop_assignments;
DROP TABLE IF EXISTS master_users;
DROP TABLE IF EXISTS workshop;

CREATE TABLE IF NOT EXISTS master_users
(
    user_id SERIAL PRIMARY KEY,
    user_firstname VARCHAR,
    user_lastname VARCHAR,
    user_ethnicity VARCHAR,
    user_phone_number VARCHAR,
    user_email VARCHAR,
    user_password VARCHAR,
    user_type integer
);

CREATE TABLE IF NOT EXISTS user_status
(
    user_id integer,
    user_status integer,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id)
        REFERENCES master_users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS workshop
(
    workshop_id SERIAL PRIMARY KEY,
    workshop_name VARCHAR,
    workshop_description VARCHAR,
    workshop_date VARCHAR,
    workshop_time VARCHAR,
    workshop_duration VARCHAR,
    workshop_chapter VARCHAR,
    workshop_num_presentors integer,
    workshop_is_virtual boolean
);

CREATE TABLE IF NOT EXISTS workshop_assignments
(
    user_id integer,
    workshop_id integer,
    has_accepted boolean,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id)
        REFERENCES master_users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_workshop_id FOREIGN KEY (workshop_id)
        REFERENCES workshop (workshop_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

INSERT INTO master_users (
    user_firstname,
    user_lastname,
    user_ethnicity,
    user_phone_number,
    user_email,
    user_password,
    user_type)
VALUES ('Raymond', 'Kuan', 'Asian'
, '510-000-0000', 'rkuan@usc.edu', 'password', 0);

INSERT INTO master_users (
    user_firstname,
    user_lastname,
    user_ethnicity,
    user_phone_number,
    user_email,
    user_password,
    user_type)
VALUES ('Wesley', 'Tong', 'Asian'
, '626-000-0000', 'wytong@usc.edu', 'password', 0);

INSERT INTO master_users (
    user_firstname,
    user_lastname,
    user_ethnicity,
    user_phone_number,
    user_email,
    user_password,
    user_type)
VALUES ('Frederick', 'Liu', 'Asian'
, '858-000-0000', 'liufrede@usc.edu', 'password', 0);

INSERT INTO user_status (user_id, user_status)
VALUES (1, 0);
INSERT INTO user_status (user_id, user_status)
VALUES (2, 0);

INSERT INTO workshop
(
    workshop_name,
    workshop_description,
    workshop_date,
    workshop_time,
    workshop_duration,
    workshop_chapter,
    workshop_num_presentors,
    workshop_is_virtual
) VALUES ('Moms Workshop', 'Workshop for moms.', 'January 1 2022','5:00 pm',
'1 day', 'Chapter 1', 3, FALSE);

INSERT INTO workshop
(
    workshop_name,
    workshop_description,
    workshop_date,
    workshop_time,
    workshop_duration,
    workshop_chapter,
    workshop_num_presentors,
    workshop_is_virtual
) VALUES ('Dads Workshop', 'Workshop for dads.', 'January 1 2022', '1 second',
'1 day', 'Chapter 1', 3, FALSE);

INSERT INTO workshop_assignments
(
    user_id,
    workshop_id,
    has_accepted
) VALUES (1, 1, true);

INSERT INTO workshop_assignments
(
    user_id,
    workshop_id,
    has_accepted
) VALUES (2, 2, false);
-- Sprint 0: Wesley, please delete placeholder code and implement actual