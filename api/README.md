# Installation Instructions

1. [Install Python 3.10+](https://www.python.org/downloads/release/python-3104/), if you don't already have it. It may be as simple as installing the Python extension into Visual Studio Code. 
2. [Install Pip](https://packaging.python.org/en/latest/tutorials/installing-packages/)
3. [Install Virtualenv](https://pypi.org/project/virtualenv/) `pip install virtualenv`
4. Ensure that Visual Studio Code has a [python interpreter](https://code.visualstudio.com/docs/languages/python#_environments) setup for the project.
5. Install project dependencies with `python setup.py install` in a terminal from the IDE (Shift+Ctl+`).

# Start the app

1. set the environment variables `FLASK_APP` to "api" and `FLASK_ENV` to "development"
    i.e. in PowerShell: `$env:FLASK_APP = "api"` and `$env:FLASK_ENV = "development"`
2. start the app by calling `python -m flask run`
3. Open another terminal and call `curl http://localhost:5000/health-check`
