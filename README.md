1. Generated the springboot project using spring initializr using maven, java version 21 and a few dependecies like:
- Spring Web
- Spring Data JPA
- PostgreSQL Driver
- Spring Boot DevTools (optional, for hot reloads)

Project Overview

The Employee Management System is a web application designed to manage employee details and generate salary slips. The system integrates a PostgreSQL database with a Spring Boot backend and a React frontend.

Steps to Set Up and Run the Application Locally

Prerequisites

Install Java 17+.

Install Node.js (v16 or higher).

Install PostgreSQL (latest version).

Install an IDE (e.g., IntelliJ IDEA, VS Code).

Backend Setup

Clone the repository:
git clone https://github.com/spacexdragon26/HRMS-XdigicsInternship.git
cd HRMS-XdigicsInternship

Update application.properties in src/main/resources:
spring.datasource.url=jdbc:postgresql://localhost:5432/hrms_db
spring.datasource.username=<your_postgres_username>
spring.datasource.password=<your_postgres_password>

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

Run these sql commands to set up the database:
CREATE DATABASE hrms_db;

CREATE TABLE employees (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
designation VARCHAR(100),
department VARCHAR(100),
basic_salary NUMERIC
);

CREATE TABLE salary_slips (
id SERIAL PRIMARY KEY,
employee_id INT REFERENCES employee (id),
net_salary NUMERIC,
pf_deduction NUMERIC,
professional_tax NUMERIC
);

Run the SpringBoot application: It will run on port 8080:
mvn spring-boot:run

For frontend:
Navigate to the frontend directory:
cd ../frontend

Install the dependencies:
npm install

Update the axios baseurl :
axios.defaults.baseURL = 'http://localhost:8080';

Start the React Application:
npm start

APIs Documentation

Employee APIs

1. Add Employee
Endpoint: POST /api/employees
Description: Add a new employee.
Request Body:
{
   "name": "John Doe",
   "email": "john.doe@example.com",
   "designation": "Software Engineer",
   "department": "IT",
   "basic_salary": 50000
}
2. Get all the employees:
Endpoint: GET /api/employees
Description: Fetch a list of all employees.
Response:
   [
   {
   "id": 1,
   "name": "John Doe",
   "email": "john.doe@example.com",
   "designation": "Software Engineer",
   "department": "IT",
   "basic_salary": 50000
   }
   ]
3. Update an employee:

Endpoint: PUT /api/employees/{id}

Description: Update an employee's details.

Request Body:
{
"name": "John Smith",
"email": "john.smith@example.com",
"designation": "Senior Engineer",
"department": "Development",
"basic_salary": 60000
}

4. Delete Employee

Endpoint: DELETE /api/employees/{id}

Description: Remove an employee.

Salary Slip APIs

1. Generate Salary Slip

Endpoint: POST /api/salary-slips

Description: Create a salary slip for an employee.

Request Body:
{
"employee_id": 1,
"net_salary": 45000,
"pf_deduction": 3000,
"professional_tax": 2000
}

2. Fetch Salary Slips

Endpoint: GET /api/salary-slips/{id}

Description: get a salary slip.

Response:
[
{
"salary_slip_id": 1,
"employee_name": "John Doe",
"employee_email": "john.doe@example.com",
"basic_salary": 50000,
"net_salary": 45000,
"pf_deduction": 3000,
"professional_tax": 2000
}
]

Frontend: React Application

Key Components

1. EmployeeForm : Form to add or update employee details.

2. EmployeeTable : Displays a list of employees.

3. SalarySlipForm : Form to generate salary slips.

4. SalarySlipPdf : Component to download a salary slip as a PDF.

- Instructions to Run the Project Locally:

Set up the PostgreSQL database and run the SQL scripts provided.

Configure the backend application by updating application.properties.

Start the backend server using Maven.

Navigate to the frontend directory, install dependencies, and start the React app.

Access the application in your browser.

- Running the Frontend

Start the React app:

npm start

Access the application at http://localhost:3000.

