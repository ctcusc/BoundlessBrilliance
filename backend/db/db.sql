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
    user_email VARCHAR,
    user_password VARCHAR,
    user_gender VARCHAR,
    user_chapter VARCHAR,
    is_admin integer -- 0 is user, 1 is admin
);

CREATE TABLE IF NOT EXISTS user_status
(
    user_id integer PRIMARY KEY references master_users,
    user_status integer  -- 0 is not approved, 1 is approved
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
    workshop_is_virtual boolean
);

CREATE TABLE IF NOT EXISTS workshop_assignments
(
    user_id integer,
    workshop_id integer,
    has_accepted integer, -- (0, undecided), (1, accepted), (-1, declined)
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
    user_email,
    user_password,
    user_gender,
    is_admin
)
VALUES  ('Boundless', 'Brilliance', 'White', 'bb@usc.edu', 'password', 'Male', 1),
        ('Admin', 'Admin', 'White', 'bb@usc.edu', 'password', 'Male', 1),
        ('Raymond', 'Kuan', 'Asian', 'rkuan@usc.edu', 'password', 'Male', 0),
        ('Wesley', 'Tong', 'Asian', 'wytong@usc.edu', 'password', 'Male', 0),
        ('User', 'One', 'White', 'user1@usc.edu', 'password', 'Female', 0),
        ('User', 'Two', 'White', 'user2@usc.edu', 'password', 'Female', 0),
        ('User', 'Three', 'White', 'user3@usc.edu', 'password', 'Female', 0);
  

INSERT INTO user_status (user_id, user_status)
VALUES  (1, 1),
        (2, 1),
        (3, 1),
        (4, 1),
        (5, 1),
        (6, 0),
        (7, 0);

INSERT INTO workshop
(
    workshop_name,
    workshop_description,
    workshop_date,
    workshop_time,
    workshop_duration,
    workshop_chapter,
    workshop_is_virtual
) VALUES   ('Introduction to Python', 
            'You’ll learn to represent and store data using Python data types and variables, and use conditionals and loops to control the flow of your programs. You’ll harness the power of complex data structures like lists, sets, dictionaries, and tuples to store collections of related data.', 
            'March 10 2023','5:00 pm', '1 day', 'Chapter CTC', FALSE),

           ('Introduction to C++', 
            'In this course, you will acquire the skills to use C++ data types and variables to represent and store data, as well as conditionals and loops to manage the flow of your programs. Additionally, you will learn how to utilize more advanced data structures such as lists, sets, dictionaries, and tuples to store interconnected data sets.', 
            'March 11 2023', '5:00 pm', '1 day', 'Chapter CTC', FALSE),

            ('Introduction to Swift', 
            'This course will teach you how to effectively use Swifts data types and variables to represent and store data, as well as control the flow of your programs through the use of conditionals and loops. You will also gain expertise in utilizing more sophisticated data structures, such as lists, sets, dictionaries, and tuples, to organize collections of related data.', 
            'March 12 2023', '5:00 pm', '1 day', 'Chapter CTC', FALSE),

            ('Introduction to Java', 
            'By taking this course, you will develop proficiency in using Java data types and variables to represent and store data, and in implementing conditionals and loops to control program flow. Additionally, you will learn to effectively employ advanced data structures, including lists, sets, dictionaries, and tuples, to manage related collections of data..', 
            'March 13 2023', '5:00 pm', '1 day', 'Chapter CTC', FALSE),

            ('Introduction to Golang', 
            'In this Golang workshop, you will gain expertise in effectively using Golangs data types and variables to store and manipulate data. You will also learn to control the flow of your Golang programs using conditionals and loops, and explore the power of complex data structures, such as arrays, slices, maps, and structs, to organize related data. By the end of this workshop, you will have developed a strong foundation in Golang programming and the ability to build efficient and robust applications.', 
            'March 14 2023', '5:00 pm', '1 day', 'Chapter CTC', FALSE),

            ('Introduction to Rust', 
            'The Rust workshop will equip you with the necessary skills to proficiently handle data using Rust data types and variables. You will also gain knowledge on how to regulate the flow of your Rust programs through the application of conditionals and loops. Furthermore, you will be introduced to advanced data structures like arrays, slices, maps, and structs, which will enable you to efficiently organize related data. Upon completion of the workshop, you will possess a solid understanding of Golang programming and the capability to develop reliable and effective applications..', 
            'March 15 2023', '5:00 pm', '1 day', 'Chapter CTC', FALSE),

            ('Introduction to C', 
            'In the C workshop, you will acquire the skills to effectively use C data types and variables to store and manipulate data. You will also learn how to regulate the flow of your C programs using conditionals and loops, and explore the power of advanced data structures, such as arrays, pointers, structures, and unions, to organize related data. By the end of this workshop, you will have developed a strong foundation in C programming and the ability to build efficient and robust applications.', 
            'March 16 2023', '5:00 pm', '1 day', 'Chapter CTC', FALSE),

            ('Introduction to Hack', 
            'In this hack workshop, you will learn to build and secure web applications using various hacking techniques. You will acquire knowledge of common vulnerabilities and how to identify and exploit them. Furthermore, you will be introduced to tools such as Burp Suite, Nmap, and Metasploit, which will enable you to perform various hacking activities, including reconnaissance, vulnerability scanning, and exploitation. By the end of this workshop, you will have gained hands-on experience in ethical hacking and web application security, and the ability to secure your applications against potential cyber attacks.', 
            'March 17 2023', '5:00 pm', '1 day', 'Chapter CTC', FALSE),

            ('Introduction to Javascript', 
            'In the JavaScript workshop, you will gain expertise in building dynamic and interactive web applications. You will learn to effectively use JavaScripts data types and variables to store and manipulate data, as well as control the flow of your programs using conditionals and loops. Additionally, you will be introduced to advanced concepts such as asynchronous programming, functions, and closures. By the end of this workshop, you will have a strong foundation in JavaScript programming and the ability to build robust and engaging web applications.', 
            'March 18 2023', '5:00 pm', '1 day', 'Chapter CTC', FALSE),

            ('Introduction to Typescript', 
            'In the TypeScript workshop, you will acquire the skills to build scalable and maintainable web applications. You will learn how to effectively use TypeScripts data types and variables to store and manipulate data, as well as control program flow using conditionals and loops. Additionally, you will explore advanced concepts such as interfaces, generics, and modules. By the end of this workshop, you will have a strong foundation in TypeScript programming and the ability to build efficient and robust web applications.', 
            'March 19 2023', '5:00 pm', '1 day', 'Chapter CTC', FALSE);

INSERT INTO workshop_assignments
(
    user_id,
    workshop_id,
    has_accepted
)   VALUES  (3, 1, 1),
            (3, 2, 1),
            (3, 3, 1),
            (3, 4, 0),
            (3, 5, 0),
            (5, 6, 1),
            (5, 7, 1),
            (5, 8, 1),
            (5, 9, 0),
            (5, 10, 0);