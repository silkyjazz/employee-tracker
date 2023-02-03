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
('Customer Service', 50000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Jasmine', 'Ulloa', 1, null),
('Juan', 'Santiago', 1, 1);

