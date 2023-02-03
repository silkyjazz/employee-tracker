DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS role;
CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL 
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) 
    REFERENCES role(id),
    manager_id INT DEFAULT NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);

