from django.db import models

# Create your models here.
class location(models.Model):
    id = models.AutoField(primary_key=True)
    location_name = models.TextField()
    lat = models.CharField(max_length=50)
    lng = models.CharField(max_length=50)
    bike_count = models.IntegerField()
    bike_count_now = models.IntegerField()
    # operator =
