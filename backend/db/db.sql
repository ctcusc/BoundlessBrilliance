DROP TABLE IF EXISTS user_status;
DROP TABLE IF EXISTS workshop_assignments;
DROP TABLE IF EXISTS master_users;
DROP TABLE IF EXISTS workshop;

CREATE TABLE IF NOT EXISTS master_users
(
    user_id SERIAL PRIMARY KEY,
    user_firstname VARCHAR,
    user_lastname VARCHAR,
    user_phone VARCHAR,
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
    workshop_location VARCHAR,
    workshop_date VARCHAR,
    workshop_start_time VARCHAR,
    workshop_end_time VARCHAR,
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
    is_admin,
    user_phone,
    user_chapter
)
VALUES  ('Boundless', 'Brilliance', 'White', 'bb@usc.edu', 'password', 'Male', 1, '111-111-1111', 'CTC Chapter'),
        ('Admin', 'Admin', 'White', 'bb@usc.edu', 'password', 'Male', 1, '222-222-2222', 'CTC Chapter'),
        ('Raymond', 'Kuan', 'Asian', 'rkuan@usc.edu', 'password', 'Male', 0, '510-598-7307', 'CTC Chapter'),
        ('Wesley', 'Tong', 'Asian', 'wytong@usc.edu', 'password', 'Male', 0, '127-345-8195', 'CTC Chapter'),
        ('Fred', 'Liu', 'White', 'liufrede@usc.edu', 'password', 'Male', 0, '891-624-7282', 'CTC Chapter'),
        ('User', 'Two', 'White', 'user2@usc.edu', 'password', 'Female', 0, '235-745-1247', 'CTC Chapter'),
        ('User', 'Three', 'White', 'user3@usc.edu', 'password', 'Female', 0, '910-235-8932', 'CTC Chapter'),
        ('Sarah', 'Nguyen', 'Asian', 'snguyen@gmail.com', 'password', 'Female', 0, '408-555-1234', 'ASB Chapter'),
        ('Andrew', 'Kim', 'Asian', 'akim@berkeley.edu', 'password', 'Male', 0, '415-555-5678', 'Club Chapter'),
        ('Michelle', 'Lee', 'Asian', 'mlee@hotmail.com', 'password', 'Female', 0, '650-555-9876', 'Community Chapter'),
        ('John', 'Chen', 'Asian', 'jchen@yahoo.com', 'password', 'Male', 0, '925-555-3456', 'Honor Society Chapter'),
        ('Stephanie', 'Wu', 'Asian', 'swu@ucla.edu', 'password', 'Female', 0, '213-555-6789', 'Student Government Chapter'),
        ('David', 'Chang', 'Asian', 'dchang@stanford.edu', 'password', 'Male', 0, '650-555-4321', 'Entrepreneurship Chapter'),
        ('Jennifer', 'Lin', 'Asian', 'jlin@harvard.edu', 'password', 'Female', 0, '617-555-8765', 'Community Chapter'),
        ('Kevin', 'Ng', 'Asian', 'kng@mit.edu', 'password', 'Male', 0, '857-555-2345', 'Community Chapter'),
        ('Lisa', 'Kwok', 'Asian', 'lkwok@yale.edu', 'password', 'Female', 0, '203-555-7890', 'Community Chapter'),
        ('Timothy', 'Nguyen', 'Asian', 'tnguyen@cornell.edu', 'password', 'Male', 0, '607-555-5678', 'Community Chapter'),
        ('Grace', 'Wang', 'Asian', 'gwang@upenn.edu', 'password', 'Female', 0, '215-555-3456', 'Community Chapter'),
        ('Brian', 'Li', 'Asian', 'bli@cmu.edu', 'password', 'Male', 0, '412-555-7890', 'Community Chapter'),
        ('Maggie', 'Hsu', 'Asian', 'mhsu@brown.edu', 'password', 'Female', 0, '401-555-2345', 'Community Chapter'),
        ('Daniel', 'Wong', 'Asian', 'dwong@duke.edu', 'password', 'Male', 0, '919-555-8765', 'Community Chapter'),
        ('Natalie', 'Kim', 'Asian', 'nkim@northwestern.edu', 'password', 'Female', 0, '847-555-4321', 'Community Chapter'),
        ('Steven', 'Choi', 'Asian', 'schoi@ucla.edu', 'password', 'Male', 0, '310-555-1234', 'Community Chapter'),
        ('Angela', 'Wu', 'Asian', 'awu@princeton.edu', 'password', 'Female', 0, '609-555-5678', 'Community Chapter'),
        ('Joshua', 'Lee', 'Asian', 'jlee@usc.edu', 'password', 'Male', 0, '213-555-8765', 'Community Chapter'),
        ('Catherine', 'Zhang', 'Asian', 'czhang@berkeley.edu', 'password', 'Female', 0, '510-555-2345', 'Community Chapter'),
        ('Jason', 'Ng', 'Asian', 'jng@harvard.edu', 'password', 'Male', 0, '617-555-7890', 'Community Chapter'),
        ('Karen', 'Liu', 'Asian', 'kliu@mit.edu', 'password', 'Female', 0, '857-555-4321', 'Community Chapter'),
        ('Adam', 'Chen', 'Asian', 'achen@yale.edu', 'password', 'Male', 0, '203-555-8765', 'Community Chapter'),
        ('Alice', 'Wang', 'Asian', 'awang@upenn.edu', 'password', 'Female', 0, '215-555-1234', 'Community Chapter'),
        ('David', 'Nguyen', 'Asian', 'dnguyen@stanford.edu', 'password', 'Male', 0, '650-555-5678', 'Community Chapter'),
        ('Emily', 'Kim', 'Asian', 'ekim@brown.edu', 'password', 'Female', 0, '401-555-7890', 'Community Chapter'),
        ('Eric', 'Li', 'Asian', 'eli@cmu.edu', 'password', 'Male', 0, '412-555-2345', 'Community Chapter'),
        ('Jennifer', 'Chang', 'Asian', 'jchang@northwestern.edu', 'password', 'Female', 0, '847-555-8765', 'Community Chapter'),
        ('Jonathan', 'Huang', 'Asian', 'jhuang@duke.edu', 'password', 'Male', 0, '919-555-4321', 'Community Chapter'),
        ('Katherine', 'Ng', 'Asian', 'kng@cornell.edu', 'password', 'Female', 0, '607-555-1234', 'Community Chapter'),
        ('Kevin', 'Chen', 'Asian', 'kchen@ucla.edu', 'password', 'Male', 0, '310-555-5678', 'Community Chapter'),
        ('Lily', 'Wu', 'Asian', 'lwu@princeton.edu', 'password', 'Female', 0, '609-555-8765', 'Community Chapter');
                            

INSERT INTO user_status (user_id, user_status)
VALUES  (1, 1),
        (2, 1),
        (3, 1),
        (4, 1),
        (5, 1),
        (6, 0),
        (7, 0),
        (8, 1),
        (9, 1),
        (10, 1),
        (11, 1),
        (12, 1),
        (13, 1),
        (14, 1),
        (15, 1),
        (16, 1),
        (17, 1),
        (18, 1),
        (19, 1),
        (20, 1),
        (21, 1),
        (22, 1),
        (23, 1),
        (24, 1),
        (25, 1),
        (26, 1),
        (27, 1),
        (28, 1),
        (29, 1),
        (30, 1);

INSERT INTO workshop
(
    workshop_name,
    workshop_description,
    workshop_location,
    workshop_date,
    workshop_start_time,
    workshop_end_time,
    workshop_chapter,
    workshop_is_virtual
) VALUES   ('Introduction to Python', 
            'You’ll learn to represent and store data using Python data types and variables, and use conditionals and loops to control the flow of your programs. You’ll harness the power of complex data structures like lists, sets, dictionaries, and tuples to store collections of related data.', 
            '1234 West Street, Los Angeles, CA 90007','June 10 2023','5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

           ('Introduction to C++', 
            'In this course, you will acquire the skills to use C++ data types and variables to represent and store data, as well as conditionals and loops to manage the flow of your programs. Additionally, you will learn how to utilize more advanced data structures such as lists, sets, dictionaries, and tuples to store interconnected data sets.', 
            '2345 Fig Street, Los Angeles, CA 90007','June 11 2023', '5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

            ('Introduction to Swift', 
            'This course will teach you how to effectively use Swifts data types and variables to represent and store data, as well as control the flow of your programs through the use of conditionals and loops. You will also gain expertise in utilizing more sophisticated data structures, such as lists, sets, dictionaries, and tuples, to organize collections of related data.', 
            '6356 35th Street, Los Angeles, CA 90007','June 12 2023', '5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

            ('Introduction to Java', 
            'By taking this course, you will develop proficiency in using Java data types and variables to represent and store data, and in implementing conditionals and loops to control program flow. Additionally, you will learn to effectively employ advanced data structures, including lists, sets, dictionaries, and tuples, to manage related collections of data.', 
            '342 25th Street, Los Angeles, CA 90007','June 13 2023', '5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

            ('Introduction to Golang', 
            'In this Golang workshop, you will gain expertise in effectively using Golangs data types and variables to store and manipulate data. You will also learn to control the flow of your Golang programs using conditionals and loops, and explore the power of complex data structures, such as arrays, slices, maps, and structs, to organize related data. By the end of this workshop, you will have developed a strong foundation in Golang programming and the ability to build efficient and robust applications.', 
            '34 W 20th Street, Los Angeles, CA 90007','June 14 2023', '5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

            ('Introduction to Rust', 
            'The Rust workshop will equip you with the necessary skills to proficiently handle data using Rust data types and variables. You will also gain knowledge on how to regulate the flow of your Rust programs through the application of conditionals and loops. Furthermore, you will be introduced to advanced data structures like arrays, slices, maps, and structs, which will enable you to efficiently organize related data. Upon completion of the workshop, you will possess a solid understanding of Golang programming and the capability to develop reliable and effective applications.', 
            '24 35th Street, Los Angeles, CA 90007','June 15 2023', '5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

            ('Introduction to C', 
            'In the C workshop, you will acquire the skills to effectively use C data types and variables to store and manipulate data. You will also learn how to regulate the flow of your C programs using conditionals and loops, and explore the power of advanced data structures, such as arrays, pointers, structures, and unions, to organize related data. By the end of this workshop, you will have developed a strong foundation in C programming and the ability to build efficient and robust applications.', 
            '1192 Tuscany Street, Los Angeles, CA 90007','June 16 2023', '5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

            ('Introduction to Hack', 
            'In this hack workshop, you will learn to build and secure web applications using various hacking techniques. You will acquire knowledge of common vulnerabilities and how to identify and exploit them. Furthermore, you will be introduced to tools such as Burp Suite, Nmap, and Metasploit, which will enable you to perform various hacking activities, including reconnaissance, vulnerability scanning, and exploitation. By the end of this workshop, you will have gained hands-on experience in ethical hacking and web application security, and the ability to secure your applications against potential cyber attacks.', 
            '32523 Fremont Street, Los Angeles, CA 90007','June 17 2023', '5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

            ('Introduction to Javascript', 
            'In the JavaScript workshop, you will gain expertise in building dynamic and interactive web applications. You will learn to effectively use JavaScripts data types and variables to store and manipulate data, as well as control the flow of your programs using conditionals and loops. Additionally, you will be introduced to advanced concepts such as asynchronous programming, functions, and closures. By the end of this workshop, you will have a strong foundation in JavaScript programming and the ability to build robust and engaging web applications.', 
            '234 Curtner Street, Los Angeles, CA 90007','June 18 2023', '5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

            ('Introduction to Typescript', 
            'In the TypeScript workshop, you will acquire the skills to build scalable and maintainable web applications. You will learn how to effectively use TypeScripts data types and variables to store and manipulate data, as well as control program flow using conditionals and loops. Additionally, you will explore advanced concepts such as interfaces, generics, and modules. By the end of this workshop, you will have a strong foundation in TypeScript programming and the ability to build efficient and robust web applications.', 
            '3256 Valley Street, Los Angeles, CA 90007','June 19 2023', '5:00 pm', '7:00 pm', 'Chapter CTC', FALSE),

            ('Mastering React Native',
            'This React Native course will teach you how to build mobile applications using React Native, a popular JavaScript framework. You will learn how to create user interfaces and navigation, handle user input, manage data, and use third-party libraries. Additionally, you will gain practical experience with debugging and testing techniques. By the end of this course, you will be able to build and deploy React Native applications to the App Store and Google Play.',
            '120 East 23rd Street, New York, NY 10010', 'July 15 2023', '10:00 am', '12:00 pm', 'New York University', FALSE),

            ('Introduction to Data Science with Python',
            'In this course, you will learn the fundamentals of data science using Python. You will explore data manipulation with Pandas, data visualization with Matplotlib, and statistical analysis with SciPy. Additionally, you will gain practical experience with machine learning algorithms such as linear regression, decision trees, and k-means clustering. By the end of this course, you will have a solid understanding of the data science workflow and be able to apply it to real-world problems.',
            '3456 Main Street, Houston, TX 77002', 'August 5 2023', '2:00 pm', '4:00 pm', 'University of Houston', FALSE),

            ('Advanced SQL',
            'This course is designed for experienced SQL users who want to take their skills to the next level. You will learn how to optimize queries for performance, write complex subqueries and joins, and use advanced data modeling techniques such as normalization and denormalization. Additionally, you will explore the use of stored procedures, triggers, and transactions. By the end of this course, you will have a deep understanding of SQL and be able to tackle complex data challenges.',
            '6789 Market Street, San Francisco, CA 94103', 'September 23 2023', '9:00 am', '12:00 pm', 'San Francisco State University', FALSE);

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