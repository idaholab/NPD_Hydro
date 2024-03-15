#! /bin/bash

# Make and run any new npd_questionnaire migrations
python manage.py makemigrations questionnaire
python manage.py migrate --database questionnaire

# Start server
python manage.py runserver 0.0.0.0:8000