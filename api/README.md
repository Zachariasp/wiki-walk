# Installation Instructions

1. [Install Python 3.10+](https://www.python.org/downloads/release/python-3104/), if you don't already have it. It may be as simple as installing the Python extension into Visual Studio Code. 
2. [Install Pip](https://packaging.python.org/en/latest/tutorials/installing-packages/)
3. [Install Flask](https://pypi.org/project/Flask/#description)
4. [Install Wikipedia API](https://pypi.org/project/Wikipedia-API/)


# Start the app

1. set the environment variables `FLASK_APP` to "api" and `FLASK_ENV` to "development"
    i.e. in PowerShell: `$env:FLASK_APP = "api"` and `$env:FLASK_ENV = "development"`
2. start the app by calling `python -m flask run`
3. Open another terminal and call `curl http://localhost:5000/health-check`
