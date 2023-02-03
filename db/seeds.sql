INSERT INTO department (name)
VALUES 
('Engineering'), 
('Finance'),
('Legal'),
('Sales'),
('Services');

INSERT INTO role (title, salary, department_id)
VALUES 
('Engineer', 75000, 1),
('Salesperson', 80000, 4),
('Account Manager', 160000, 2),
('Sales Lead', 100000, 4),
('Customer Service', 50000, 5),
('Lead Engineer', 150000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Jasmine', 'Ulloa', 1, null),
('John', 'Doe', 2, null),
('Mike', 'Chan', 2, 2),
('Ashley', 'Rodriguez', 3, null),
('Kunal', 'Singh', 3, 3),
('Tom', 'Allen', 3, 3),
('Juan', 'Santiago', 1, 1);

