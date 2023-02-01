DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

--Use database
USE employee_db;

CREATE TABLE department (
    id INT AUTO_COMPLETE NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY(id)
)

CREATE TABLE role(
    --Question?? When to use auto complete and when not to--
    id INT AUTO_COMPLETE NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL -- do i need this?
)

CREATE TABLE employee(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) --get id from role id
    REFERENCES role(id)
    manager_id INT DEFAULT NULL --null if the employee has no manager
)

