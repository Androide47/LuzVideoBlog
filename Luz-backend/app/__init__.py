from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)
jwt = JWTManager(app)

from app.routes import auth, users, videos, blog, subscriptions

app.register_blueprint(auth.bp)
app.register_blueprint(users.bp)
app.register_blueprint(videos.bp)
app.register_blueprint(blog.bp)
app.register_blueprint(subscriptions.bp)
