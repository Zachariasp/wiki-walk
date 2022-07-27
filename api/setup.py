from setuptools import setup

setup(
    name='Wiki-Walk',
    version='0.0.1',
    author='Daniel Callahan, James Mayo, and Zacharias Shufflebarger',
    description='A word cloud game',
    long_description='Walk from one Wikipedia article to a target article in as few steps as possible!',
    # url='https://medium.com/@gmyrianthous',
    # keywords='sample, example, setuptools',
    python_requires='~=3.10.4',
    install_requires=[
        'certifi~=2022.6.15',
        'charset-normalizer~=2.1.0',
        'click~=8.1.3',
        'colorama~=0.4.5',
        'Flask~=2.1.3',
        'idna~=3.3',
        'itsdangerous~=2.1.2',
        'Jinja2~=3.1.2',
        'MarkupSafe~=2.1.1',
        'requests~=2.28.1',
        'urllib3~=1.26.11',
        'Werkzeug~=2.2.0',
        'Wikipedia-API~=0.5.4'
    ],
    # extras_require={
    #     'test': ['pytest', 'coverage'],
    # },
    # package_data={
    #     'sample': ['example_data.csv'],
    # },
    # entry_points={
    #     'runners': [
    #         'sample=sample:main',
    #     ]
    # }
)
