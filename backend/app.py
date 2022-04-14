from flask import Flask, render_template, request, redirect, url_for, session, make_response, jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
from flask_cors import CORS
import json
app = Flask(__name__ )
cors = CORS(app)

app.secret_key = 'your secret key'


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'zdrasti0056'
app.config['MYSQL_DB'] = 'test'


mysql = MySQL(app)

@app.route('/pythonlogin/', methods=['GET', 'POST'])
def login():

    data = request.get_json()
    print(data['email'])
    print(data['password'])
    
    msg = ''
    if request.method == 'POST':

        email = data['email']
        password = data['password']

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE email = %s AND password = %s', (email, password,))

        account = cursor.fetchone()

        if account:

            session['loggedin'] = True
            session['id'] = account['id']
            session['username'] = account['username']
            print('logged in')
            return 'Logged in successfully!'
        else:

            msg = 'Incorrect username/password!'

    print(msg)
    return msg


@app.route('/pythonlogin/register', methods=['GET', 'POST'])
def register():

    data = request.get_json()
    print(data['email'])
    print(data['password'])
    print(data['username'])
    
    msg = ''
    print('Hello world!')
    if request.method == 'POST':

        username = data['username']
        password = data['password']
        email = data['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE username = %s', (username,))
        account = cursor.fetchone()

        if account:
            msg = 'Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = 'Invalid email address!'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Username must contain only characters and numbers!'
        elif not username or not password or not email:
            msg = 'Please fill out the form!'
        else:

            cursor.execute('INSERT INTO accounts VALUES (NULL, %s, %s, %s)', (username, password, email,))
            mysql.connection.commit()
            msg = 'You have successfully registered!'
    

    return msg

if __name__ == "__main__":
    app.run(debug=True)
    
