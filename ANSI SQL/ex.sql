CREATE DATABASE testdb;
USE testdb;

CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

INSERT INTO Students VALUES (1, 'Alice', 20), (2, 'Bob', 22);

SELECT * FROM Students;
