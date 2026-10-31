// CREATE TABLE USERS (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// INSERT INTO USERS (name, email, password) 
// VALUES('John Doe', 'john.doe@example.com', 'password123');

// INSERT INTO USERS (name, email, password)
// VALUES('Jane Smith', 'jane.smith@example.com', 'password456'),
// ('Bob Johnson', 'bob.johnson@example.com', 'password789'),
// ('John Doe', 'john.doe@example.com', 'password123')





// SELECT * FROM USERS;

// INSERT INTO USERS (COLMN1, COLUMN2, COLUMN3) 
// VALUES (VALUE1, VALUE2, VALUE3);

<!-- 3. SELECT – Get data -->


-- Get all employees
SELECT * FROM employees;

-- Get specific columns
SELECT name, salary FROM employees;

-- Get unique departments
SELECT DISTINCT department FROM employees;

-- Get total employees
SELECT COUNT(*) FROM employees;

-- Get highest salary
SELECT MAX(salary) FROM employees;

-- Get lowest salary
SELECT MIN(salary) FROM employees;

-- Get average salary
SELECT AVG(salary) FROM employees;

-- Get total salary
SELECT SUM(salary) FROM employees;


4. WHERE – Filter records
-- Employees from IT department
SELECT * FROM employees
WHERE department = 'IT';

-- Salary greater than 50000
SELECT * FROM employees
WHERE salary > 50000;

-- Salary less than 50000
SELECT * FROM employees
WHERE salary < 50000;

-- Salary equal to 60000
SELECT * FROM employees
WHERE salary = 60000;

-- Multiple conditions using AND
SELECT * FROM employees
WHERE department = 'IT' AND salary > 60000;

-- Either condition using OR
SELECT * FROM employees
WHERE department = 'IT' OR department = 'HR';

-- Not equal
SELECT * FROM employees
WHERE department != 'IT';

5. UPDATE – Modify data
-- Update one employee's salary
UPDATE employees
SET salary = 75000
WHERE id = 1;

-- Update multiple columns
UPDATE employees
SET salary = 80000, city = 'Mumbai'
WHERE id = 2;

-- Update all employees in IT department
UPDATE employees
SET salary = salary + 5000
WHERE department = 'IT';


IN – Match multiple values

SELECT * FROM employees
WHERE department IN ('IT', 'HR', 'Sales');

NOT IN – Exclude multiple values
SELECT * FROM employees
WHERE department NOT IN ('IT', 'HR');

BETWEEN – Find a range

SELECT * FROM employees
WHERE salary BETWEEN 40000 AND 70000;


LIKE – Search matching patterns

Remember:
- % means zero or more characters.
- _ means exactly one character.
-- Names starting with K


SELECT * FROM employees
WHERE name LIKE 'K%';

-- Names ending with a
SELECT * FROM employees
WHERE name LIKE '%a';

-- Names containing ab
SELECT * FROM employees
WHERE name LIKE '%ab%';

-- Names with exactly 5 characters
SELECT * FROM employees
WHERE name LIKE '_____';


IS NULL – Find missing values

SELECT * FROM employees
WHERE city IS NULL;

SELECT * FROM employees
WHERE city IS NOT NULL;


8. ORDER BY – Sorting records

-- Ascending order (small to large)
SELECT * FROM employees
ORDER BY salary ASC;

-- Descending order (large to small)
SELECT * FROM employees
ORDER BY salary DESC;

-- Sort by department, then salary
SELECT * FROM employees
ORDER BY department ASC, salary DESC;


9. LIMIT – Get limited records

-- First 3 employees
SELECT * FROM employees
LIMIT 3;

-- Top 5 highest-paid employees
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 5;

-- Skip 2 records and get next 3
SELECT * FROM employees
LIMIT 3 OFFSET 2;


0. GROUP BY – Group similar records

-- Count employees in each department
SELECT department, COUNT(*)
FROM employees
GROUP BY department;

-- Total salary in each department
SELECT department, SUM(salary)
FROM employees
GROUP BY department;

-- Average salary in each department
SELECT department, AVG(salary)
FROM employees
GROUP BY department;

-- Highest salary in each department
SELECT department, MAX(salary)
FROM employees
GROUP BY department;

-- Lowest salary in each department
SELECT department, MIN(salary)
FROM employees
GROUP BY department;


11. HAVING – Filter grouped records

-- Departments having average salary greater than 50000
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;



WHERE vs HAVING – Most important interview question
WHERE
Filters rows

Before GROUP BY

HAVING
Filters groups

After GROUP BY


Example using WHERE
SELECT *
FROM employees
WHERE salary > 50000;


Example using HAVING
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;


Can we use both together? Yes!
SELECT department, AVG(salary)
FROM employees
WHERE city = 'Bangalore'
GROUP BY department
HAVING AVG(salary) > 50000;



12. JOIN – Combine multiple tables
First create another table:
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50),
    location VARCHAR(50)
);

INSERT INTO departments (department_name, location)
VALUES
('IT', 'Bangalore'),
('HR', 'Delhi'),
('Sales', 'Mumbai');


For a proper JOIN, let's assume employees.department matches departments.department_name.

INNER JOIN – Matching records from both tables
SELECT employees.name, employees.salary,
       departments.location
FROM employees
INNER JOIN departments
ON employees.department = departments.department_name;


LEFT JOIN – All records from the left table
SELECT employees.name, departments.location
FROM employees
LEFT JOIN departments
ON employees.department = departments.department_name;


RIGHT JOIN – All records from the right table
SELECT employees.name, departments.location
FROM employees
RIGHT JOIN departments
ON employees.department = departments.department_name;


FULL OUTER JOIN

MySQL does not directly support FULL OUTER JOIN. You can achieve it using LEFT JOIN, RIGHT JOIN and UNION.
SELECT *
FROM employees e
LEFT JOIN departments d
ON e.department = d.department_name

UNION

SELECT *
FROM employees e
RIGHT JOIN departments d
ON e.department = d.department_name;


13. ALTER – Change table structure
-- Add a new column
ALTER TABLE employees
ADD email VARCHAR(100);

-- Modify column datatype
ALTER TABLE employees
MODIFY name VARCHAR(150);

-- Rename a column
ALTER TABLE employees
RENAME COLUMN salry TO salary;

-- Delete a column
ALTER TABLE employees
DROP COLUMN email;

-- Rename table
ALTER TABLE employees
RENAME TO staff;


14. DELETE vs TRUNCATE vs DROP
Query	Purpose
DELETE	Delete selected or all rows
TRUNCATE	Remove all rows quickly
DROP	Delete entire table structure and data

-- Delete selected rows
DELETE FROM employees WHERE id = 2;

-- Delete all rows
TRUNCATE TABLE employees;

-- Delete entire table
DROP TABLE employees;


15. Subqueries – Query inside another query
-- Employees earning more than average salary
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);

-- Employee with the highest salary
SELECT *
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);


16. CASE – Conditional logic
Similar to if-else in JavaScript.
SELECT name, salary,
CASE
    WHEN salary >= 70000 THEN 'High Salary'
    WHEN salary >= 50000 THEN 'Medium Salary'
    ELSE 'Low Salary'
END AS salary_status
FROM employees;


17. UNION vs UNION ALL
Both combine results from multiple SELECT queries.

UNION removes duplicate records.
SELECT city FROM employees
UNION
SELECT location FROM departments;


UNION ALL keeps duplicate records.
SELECT city FROM employees
UNION ALL
SELECT location FROM departments;


18. Useful SQL functions
-- Convert name to uppercase
SELECT UPPER(name) FROM employees;

-- Convert name to lowercase
SELECT LOWER(name) FROM employees;

-- Get name length
SELECT name, LENGTH(name) FROM employees;

-- Combine two columns
SELECT CONCAT(name, ' - ', department)
FROM employees;

-- Round average salary
SELECT ROUND(AVG(salary), 2)
FROM employees;

-- Current date
SELECT CURDATE();

-- Current date and time
SELECT NOW();