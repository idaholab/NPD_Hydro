#! /bin/bash

# Make and run any new npd_questionnaire migrations
python manage.py makemigrations questionnaire
python manage.py migrate --database questionnaire

# Start server
gunicorn --bind 0.0.0.0:80 --timeout 90 --worker-class gevent --log-level error server.wsgi