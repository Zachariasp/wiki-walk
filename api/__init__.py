import os

from flask import Flask


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'wiki-walk.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # This endpoint can be monitored, so we can be notified if the app goes down.
    @app.route('/health-check')
    def health_check():
        # as the app grows, add more code in here for checking that everything is healthy
        return 'Status: Healthy'

    from . import icons, wiki
    app.register_blueprint(icons.blueprint)
    app.register_blueprint(wiki.blueprint)

    return app