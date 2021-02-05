from django.db import models

from o_login.models import operator_account

# Create your models here.
class location(models.Model):
    id = models.AutoField(primary_key=True)
    location_name = models.TextField()
    lat = models.CharField(max_length=50, null=True)
    lng = models.CharField(max_length=50, null=True)
    bike_count = models.IntegerField()
    bike_count_now = models.IntegerField()
    # operator_id = models.ForeignKey(operator_account, on_delete=models.CASCADE)