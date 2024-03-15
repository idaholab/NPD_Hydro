from django.contrib.gis.db import models

class Questionnaire(models.Model):
    id = models.AutoField(primary_key=True)
    user_group = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    county = models.CharField(max_length=255)
    benefits = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'npd_questionnaire'