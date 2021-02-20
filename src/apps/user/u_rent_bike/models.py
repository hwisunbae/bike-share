from django.db import models

from a_manage_bike.models import bike
from u_login.models import user_account

# Create your models here.
class user_route(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(user_account, on_delete=models.CASCADE)
    bike_id = models.ForeignKey(bike, on_delete=models.CASCADE)
    latitude = models.CharField(max_length=50, null=True)
    longitude = models.CharField(max_length=50,null=True)
    start_time = models.DateTimeField(null=True)
    end_time = models.DateTimeField(null=True)
    fee = models.FloatField(default=0.0)
    ratings = models.CharField(max_length=50, null=True)

