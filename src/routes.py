@app.route("/add", methods=["POST"], strict_slashes=False)
def add_account():
    email = request.json['email']
    password = request.json['password']

    account = Accounts(
        email=email,
        password = password
    )

    db.session.add(account)
    db.session.commit()

    return article_schema.jsonify(account)