from app import app as application  # cPanel will look for `application`
app = application

if __name__ == "__main__":
    app.run(debug=True)
