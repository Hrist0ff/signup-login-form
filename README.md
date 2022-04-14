# Simple Registration/Login Form made with React, Flask and MySQL

This project is task for Telebid Pro.

## Features

### • Registration form 
### • Login form
### • Validation (Checking for empty fields, duplicate entries, invalid arguments and incorrect fields typing)
### • Interaction between Frontend, Backend and MySQL (Getting data from Frontend, sending it to the backend which communicates with the Database)
### • Database with IDs, Usernames, Passwords and Emails
### • Good UI

## How do i set up the project

### Before everything,you need to download:
* [MySQL](https://www.mysql.com/)
* [Node.js](https://nodejs.org/en/)
* [Python](https://www.python.org/)

#### 1. Download the project as ZIP file

#### 2. Create new folder and extract in it

#### 3. Now open your editor and in the terminal access /backend and write in there:
      python -m venv /path/to/backend
      
#### 4. Run the activate.bat to start the virtual env and go back to the backend folder

#### 5. You need to install three modules in the venv to start the backend server:
       pip install flask
       pip install flask_cors
       pip install flask_mysqldb

#### 6. Run the server by typing:
       python app.py
       
#### 7. Run the SQL query which is in src folder in the front end and after the first run, comment line 5 and 14

#### 8. Go to Frontend folder and run:
        npm install react-scripts
#### 9. Run the front end by typing:
        npm start

#### 10. Enjoy!
