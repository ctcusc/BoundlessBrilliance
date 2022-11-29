CREATE TABLE IF NOT EXISTS master_users
(
    user_id integer NOT NULL,
    user_firstname VARCHAR,
    user_lastname VARCHAR,
    user_ethnicity VARCHAR,
    user_phone_number VARCHAR,
    user_email VARCHAR,
    user_password VARCHAR,
    user_type integer,
    CONSTRAINT master_users_pkey PRIMARY KEY (user_id)
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
    workshop_id integer NOT NULL,
    workshop_name VARCHAR,
    workshop_description VARCHAR,
    workshop_date VARCHAR,
    workshop_time VARCHAR,
    workshop_duration VARCHAR,
    workshop_chapter VARCHAR,
    workshop_num_presentors integer,
    workshop_is_virtual boolean,
    CONSTRAINT workshop_pkey PRIMARY KEY (workshop_id)
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

-- INSERT INTO master_users (user_id integer NOT NULL,
--     user_firstname,
--     user_lastname,
--     user_ethnicity,
--     user_phone_number,
--     user_email,
--     user_password,
--     user_type)
-- VALUES (0, 'test first name', 'test last name', 'test ethnicity'
-- , 'test phone number', 'test email', 'test password', 'test type');

-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS public.workshop_assignments
--     OWNER to wesleytong;


-- Placeholder Code
-- Sprint 0: Wesley, please delete placeholder code and implement actual